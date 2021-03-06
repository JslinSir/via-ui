import { runAnimotionFrame } from '../utils/animate'
import * as frameConfig from '../utils/animateConfig'

let _directionFrame = 'bottomFrame'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 点击周边 mask 是否关闭窗口, 默认支持
    maskClose: {
      type: Boolean,
      value: true
    },
    // 是否有遮罩
    hasMask: {
      type: Boolean,
      value: true
    },
    // bottom top center,left right
    direction: {
      type: String,
      value: 'bottom'
    },
    zIndex: {
      type: Number,
      value: 10
    }
  },
  observers: {
    direction(v) {
      if (v) {
        const key = `${v}Frame`
        if (key in frameConfig) {
          _directionFrame = key
        } else {
          throw new Error('direction must be  bottom top center,left right')
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    status: false,
    style: 'bottom:0'
  },
  attached() {
    // 弹窗锁状态
    this._lock = false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      if (this._lock) {
        return
      }
      this.setData({ status: true }, () => {
        this._popShow()
        this._maskShow()
      })
    },

    async hide() {
      if (this._lock) {
        this._popHide()
      }
    },

    handleClose() {
      this.properties.maskClose && this.hide()
    },

    /**
     * 遮罩显示
     */
    async _maskShow() {
      await runAnimotionFrame(this, '#popMask', frameConfig.maskFrame.show, 30)
    },

    /**
     * 遮罩隐藏
     */
    async _maskHide() {
      this.setData({ status: false }, () => {
        this._lock = false
      })
    },

    /**
     * 弹窗展示
     */
    async _popShow() {
      await runAnimotionFrame(this,'#popCotent',frameConfig[_directionFrame].show)
      this._lock = true
    },

    /**
     * 弹窗关闭
     */
    async _popHide() {
      await runAnimotionFrame(this,'#popCotent',frameConfig[_directionFrame].hide)
      this._maskHide()
    },

    fobidCotentClick() {}
  }
})
