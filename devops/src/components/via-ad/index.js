/**
 * 广告组件
 */

Component({
  externalClasses: ["class-ad-content"],
  properties: {
    type: {
      type: String,
      value: 'modal' //modal  | full
    },
    visible: {
      type: Boolean,
      value: false
    },
    clickClose: {
      type: Boolean,
      value: true
    },
    iconName: {
      type: String,
      value: 'roundclose'
    },
    // 倒计时位置
    actionPosition: {
      type: String,
      value: 'bottom' //bottom  | top
    },
    // 广告存活时间
    duration: {
      type: Number,
      value: 4
    },

  },

  data: {
    countDown: 0
  },

  attached() {
    this.setData({
      countDown: this.properties.duration
    })
    this.clearCountDown()
  },

  detached() {
    this.clearCountDown()
  },


  methods: {
    show() {
      if (this.data.type === 'full') {
        if (this.data.countDown > 0) {
          this.setData({ visible: true }, () => {
            this.startCountDown()
          })
        }
      }else{
        this.setData({ visible: true })
      }
  

    },
    hide() {
      this.setData({ visible: false }, () => {
        this.clearCountDown()
        this.setData({countDown:this.properties.duration})
        this.triggerEvent('onClose', '')
      })
    },

    handleClose() {
      this.hide('close')
    },

    startCountDown() {
      let { countDown } = this.data
      this._timer = setInterval(() => {
        countDown = countDown - 1
        this.setData({ countDown })
        if (countDown <= 0) {
          this.hide()
          this.clearCountDown()
        }
      }, 1000)
    },

    clearCountDown() {
      this._timer && clearInterval(this._timer)
    },

  },
});