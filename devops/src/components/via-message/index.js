import { runAnimotionFrame, } from '../utils/animate'
import { MessageDefaultProps } from './props'
const ANIMATE_CONFIG = {
  show: [
    { opacity: 0, translateY: '-100%' },
    { opacity: 1, translateY: '0' }
  ],
  hide: [
    { opacity: 1, translateY: '0' },
    { opacity: 0, translateY: '-100%' }
  ]
}

Component({
  properties:MessageDefaultProps,
  data: {
    messageShow: false,
    icon: 'checkIcon',
    colors: {
      checkIcon: '#87d068',
      closeIcon: '#f50',
      waringIcon: '#fa8c16'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    message(content, time = 1500) {
      this._message(content, time, null)
    },
    success(content, time = 1500) {
      this._message(content, time, 'checkIcon')
    },
    error(content, time = 1500) {
      this._message(content, time, 'closeIcon')
    },

    loading(content, time = 1500) {
      this._message(content, time, 'loading')
    },
    warn(content, time = 1500) {
      this._message(content, time, 'waringIcon')
    },

    _message(content, time, icon) {
      if (!this.status) {
        this.status = true
        this.messageShowAnimotion(content, time, icon)
      }
    },

    messageShowAnimotion(content, time, icon) {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID)
      }
      this.setData({ messageShow: true, content, icon }, async () => {
        await runAnimotionFrame(this, '#message', ANIMATE_CONFIG.show, 300)
        this.timeoutID = setTimeout(() => this.messageHideAnimotion(), time)
      })
    },

    async messageHideAnimotion() {
      await runAnimotionFrame(this, '#message', ANIMATE_CONFIG.hide, 300)
      this.setData({ messageShow: false }, () => {
        this.triggerEvent('onClose', '')
        this.status = false // 可进行下一次动画执行
      })
    }
  }
})
