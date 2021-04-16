
Component({
  properties: {
    placeholder: {
      type: String,
      value: ''
    },
    colors:{ //字体颜色
      type: Array,
      value: ['#323232', '#fe473c', '#26a4ec', '#1bb72e', '#c73277', '#fba72b'],
    },
    bottomSlot:{
      type: Boolean,
      value: false,
    },
    content: {
      type: String,
      value: null,
    },
    

    imageUploadList: {
      type: Array,
      value: [],
    }
  },

  data: {
    formats: {},
    isIOS: false,
    keyboardHeight: 0,
    showDrawPanel: false,
    bottomBtnShow: false,
    weChatSdkCanUse: true,
    insertImageList: [],
  },

  attached() {
    // 提示升级版本
    if (typeof wx.onKeyboardHeightChange !== 'function') {
      wx.showToast({ title: '客户端版本过低，编辑器无法使用，请更新最新客户端', icon: 'none', duration: 2000 })
      this.setData({weChatSdkCanUse: false})
      return ;
    }

    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({ isIOS })
    this.updatePosition(0)
    let keyboardHeight = 0;

    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0;
      keyboardHeight = res.height;
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success: () => {
            this.updatePosition(keyboardHeight)
            this.editorCtx.scrollIntoView()
          }
        })
      }, duration)
    })

    this.clipImage = this.selectComponent("#clipImage");
  },

  methods: {
    onStatusChange(e) {
      const formats = e.detail;
      this.setData({ formats })
    },

    onEditorReady() {
      wx.showLoading()
      this.createSelectorQuery().select('#editor').context(res => {
        this.editorCtx = res.context;
        const { content, imageUploadList } = this.properties;
        if(content && content.length) {
          this.editorCtx.setContents({ html: `${content}`, complete: () => wx.hideLoading() })
          setTimeout(() => {
            this.setData({ bottomBtnShow: true })
          }, 200)
        }
        else {
          wx.hideLoading()
        }
        if(imageUploadList && imageUploadList.length) {
          this.setData({
            insertImageList: imageUploadList,
          })
        }
      }).exec()
    },

    updatePosition(keyboardHeight) {
      const toolbarHeight = 60
      const { windowHeight } = wx.getSystemInfoSync();
      let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight ) : windowHeight - toolbarHeight;
      this.setData({  editorHeight, keyboardHeight,bottomBtnShow: keyboardHeight > 0 ? false : true })
      
    },

    toggleDrawPanel() {
      this.setData({ showDrawPanel: !this.data.showDrawPanel })
    },

    format(e) {
      // console.log('--> format ')
      let { name, value } = e.target.dataset
      if (!name) return
      this.editorCtx.format(name, value)
    },

    insertImage() {
      wx.showLoading({ title: '相册初始化中' });
      this.editorCtx.blur({
        success: () => {
          wx.hideLoading()
          setTimeout(()=>{
            wx.chooseImage({
              sizeType: ['compressed'],
              success: (res) => {
                const tempFilePaths = res.tempFilePaths;
                const tempFiles = res.tempFiles;
                const { insertImageList } = this.data;
                let imagesList = [];
                (tempFilePaths || []).map(url => {
                  const imgData = 'data:image/png;base64,' + wx.arrayBufferToBase64(wx.getFileSystemManager().readFileSync(url));
                  this.editorCtx.insertImage({
                    src: imgData,
                    data:{
                      id: imagesList.length,
                      role: 'god',
                      keyImagePath: url,
                    },
                    width: '100%',
                    success: () => {
                      const imageDic = { path: url, size: tempFiles[imagesList.length].size, id: imagesList.length };
                      imagesList.push(imageDic);
                      // 全部插入完成
                      if(imagesList.length === tempFilePaths.length) {
                        this.setData({
                          insertImageList: [...insertImageList, ...imagesList],
                        })
                      }
                    },
                  })
                })
              }
            })
          }, 200)
        }
      })
    },

    // 失去焦点
    handleBlur: function() {
      this.setData({ bottomBtnShow: true })
      const { insertImageList = [] } = this.data;
      this.getEditorContent().then( res => {
        const { html } = res;
        const imageList = (insertImageList || []).filter(item => html.indexOf(item.path) !== -1 )
        this.triggerEvent('blur', { ...res, imageList })
      })
    },

    handleInput(e) {
      const { keyboardHeight } = this.data;
      this.editorCtx.scrollIntoView()
      this.setData({ showDrawPanel: false }, () => {
        this.updatePosition(keyboardHeight)
      })
      this.triggerEvent('input');
    },

    handleEditorFocus() {
      this.editorCtx.scrollIntoView()
      this.setData({ bottomBtnShow: false })
    },

    /**
     * 完成
     */
    saveEditor: function () {
      const { insertImageList = [] } = this.data;
      this.getEditorContent().then(res => {
        const { html } = res
        const imageList = (insertImageList || []).filter(item => html.indexOf(item.path) !== -1 )
        this.triggerEvent('save', { ...res, imageList })
      })
    },

    // 取消
    cancel:function(){
      this.triggerEvent('cancel','')
    },

    getEditorContent() {
      return new Promise((resolve, reject) => {
        this.editorCtx.getContents({
          success: res => {
            const { html = '', text = ''} = res;
            let filterHtml = html;
            if(-1 !== html.indexOf('wx:nodeid')) {
              filterHtml = html.replace(/ wx:nodeid="\d+"/g, '');
            }
            const richText = text.replace(/↵/g, "").replace(/[\r\n]/g, "");
            resolve({ html: filterHtml, text: richText })
          },
          fail: (e) => {
            reject(e)
          }
        })
      })
    }
  }
})