
Component({

  data: {
    messageShow: false,
    icon:'check',
    color:{
      roundcheckfill:'#87d068',
      roundclosefill:'#f50',
      infofill:'#fa8c16',

    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    message(content, time = 1500) {
      this._message(content, time, null)
    },
    success(content, time = 1500) {
      this._message(content, time, 'roundcheckfill')
    }, // 
    error(content, time = 1500) {
      this._message(content, time, 'roundclosefill')
    },

    loading(content, time = 1500) {
      this._message(content, time, 'loading')
    },
    warn(content, time = 1500) {
      this._message(content, time, 'infofill')
    },


    _message(content, time,icon) {
      if(!this.status){
        this.status = true
        this.messageShowAnimotion(content, time,icon)
      }
    
 
    },

    messageShowAnimotion(content, time,icon) {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID)
      }
      this.setData({ messageShow: true, content,icon }, () => {
        this.animate('#message', [
          { opacity: 0, translateY: '-100%' },
          { opacity: 1, translateY: '0' },
        ], 300, function () {
          this.timeoutID = setTimeout(() => {
            this.messageHIdeAnimotion()

          }, time)

        }.bind(this))
      })

    },

    messageHIdeAnimotion() {
      this.animate('#message', [
        { opacity: 1, translateY: '0' },
        { opacity: 0, translateY: '-100%' },
      ], 300, function () {
        this.setData({ messageShow: false },()=>{
          this.triggerEvent('onClose','')
          this.status = false // 可进行下一次动画执行
        })
      }.bind(this))
    },
  }
})
