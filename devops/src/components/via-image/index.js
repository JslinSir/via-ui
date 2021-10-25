

Component({
  externalClasses: ["class-image"],
  /**
   * 组件的属性列表
   */
  properties: {
    style: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    webp: {
      type: Boolean,
      value: false
    },
    lazyLoad: {
      type: Boolean,
      value: false
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false
    },
    preView: {
      type: Boolean,
      value: false
    },
    errorImg: {
      type: String,
      value: '../via-status/img/imgError.png'
    },
    errorImgSize:{
      type:Number,
      value:100
    },
    loadingImg: {
      type: String,
      value: ''
    },
    loadingImgSize:{
      type:Number,
      value:''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:true,
    error:false,
  },
  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleImgLoadError(e) {
      const detail = e.detail
      this.setData({error:true,loading:false})
      this.triggerEvent("onError", detail)

    },
    handleLoadSuccess(e) {
      const detail = e.detail
      this.setData({error:false ,loading:false})
      this.triggerEvent("onSuccess", detail)
    },

    handlePreview() {
      if (this.data.src.startsWith('http') && this.data.preView) {
        wx.previewImage({
          current: '0',
          urls: [this.data.src]
        })
      }

    }

  }
})