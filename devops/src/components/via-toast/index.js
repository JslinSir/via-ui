
 Component({
 properties:{
  toastSrc:String,
  loadingType:{
    type:String, //default, ,move
    value:'default'
  }
 },
  data: {
    toastShow: false,
    opacity: 0,
    // 图标
    toastIcon: 'check',

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    toast(content, time = 1500) {
      this._toast(content, time, null)
    },
    success(content, time = 1500) {
      this._toast(content, time, 'check')
    }, // 
    error(content, time = 1500) {
      this._toast(content, time, 'close')
    },

    loading(content, time = 1500){
      this._toast(content, time, 'loading')
    },
    warn(content, time = 1500){
      this._toast(content, time, 'info')
    },
    
      
    _toast(content, time, toastIcon) {
      this.setData({toastShow: true, toastIcon, content, }, () => {
        setTimeout(() => this.setData({opacity: 1}), 10)
        setTimeout(() => {
          this.setData({opacity: 0})
          setTimeout(() => this.setData({toastShow: false}), 200)
        }, time + 200)
      })
    
    },
  }
})
