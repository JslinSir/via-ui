import { runAnimotionFrame } from '../utils/animate'
import * as frameConfig from '../utils/animateConfig'
import { ToastDefaultProps } from './props'
Component({
  properties: ToastDefaultProps,
  data: {
    toastShow: false,
    opacity: 0,
    // 图标
    toastIcon: 'checkIcon'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toast(content, time = 1500) {
      this._toast(content, time, null)
    },
    success(content, time = 1500) {
      this._toast(content, time, 'checkIcon')
    }, 
    error(content, time = 1500) {
      this._toast(content, time, 'closeIcon')
    },

    loading(content, time = 1500) {
      this._toast(content, time, 'loading')
    },
    warn(content, time = 1500) {
      this._toast(content, time, 'waringIcon')
    },

    async _toast(content, time, toastIcon) {
      this.setData(
        {
          toastShow: true,
          toastIcon,
          content
        },
        async () => {
          await runAnimotionFrame(this, '#toast', frameConfig.maskFrame.show)
          setTimeout(async () => {
            await runAnimotionFrame(this, '#toast', frameConfig.maskFrame.hide)
            this.setData({
              toastShow: false
            })
          }, time)
        }
      )
    }
  }
})
