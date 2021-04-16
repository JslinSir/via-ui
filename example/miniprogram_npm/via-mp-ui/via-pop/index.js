 
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
    show: {
      type: Boolean,
      value: false
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
    show(v) {
      if (v) {
        this.setData({ modalShow: v })
        wx.nextTick(() => {
          setTimeout(() => {
            this.setAnimation(true)
          }, 50)
        })
      } else {
        this.close()
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    modalShow: false,
    maskShow: false,
    opacityAnimation: null,
    contentAnimation: null,
    contentStyle: null
  },
  attached() {
    this.duration = 200
    this.animationFunction = {
      'top': 'bottomTopAnimationStep',
      'bottom': 'bottomTopAnimationStep',
      'left': 'leftRightAnimationStep',
      'right': 'leftRightAnimationStep',
      'center': 'centerAnimationStep'
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    forbidMove() {

    },
    // 显示弹窗
    show(){
      this.setData({ modalShow: true })
      wx.nextTick(() => {
        setTimeout(() => {
          this.setAnimation(true)
        }, 50)
      })
    },
    /**
     * 设置动画
     * @param {*} show 
     */
    async setAnimation(show) {
      const opacityAnimation = this.opacityAnimationStep(show)
      if (!this.animationFunction || !this.animationFunction[this.data.direction]) {
        return
      }
      const contentAnimation = await this[this.animationFunction[this.data.direction]](show)
      if (this.data.direction === 'center' || show === false) {
        this.setData({opacityAnimation, contentAnimation: contentAnimation.animationStep,contentStyle:''})
      } else {
        this.setData({contentStyle: contentAnimation.style?contentAnimation.style:''}, () => {
          setTimeout(() => {
            this.setData({opacityAnimation, contentAnimation: contentAnimation.animationStep})
          }, 100)
        })
      }
    },
    closeTap() {
      if (this.properties.maskClose === false) {
        return
      }
      this.setData({show: false})
    },
    /**
     * 关闭弹窗
     */
    async close(){
      await this.setAnimation(false)
      wx.nextTick(() => {
        setTimeout(() => {
          this.setData({opacityAnimation: null, contentAnimation: null, modalShow: false})
        }, this.duration)
      })
    },

    /**
     * 左右动画
     */
    async leftRightAnimationStep(show) {
      const { viewWidth, width } = await this._getViewWidthHeight()
      const animation = wx.createAnimation({
        duration: this.duration,
        timingFunction: 'linear',
      })

      let translateX = show? 0: -width
      let translateYWidth = -width
      if (this.data.direction === 'right') {
        translateX = show? viewWidth - width: viewWidth
        translateYWidth = viewWidth
      }
      animation.translateX(translateX).step()
      return {
        style: `transform: translateX(${translateYWidth}px)`,
        animationStep: animation.export()
      }
    },
    // 上下动画
    async bottomTopAnimationStep(show) {
      const { viewHeight, height } = await this._getViewWidthHeight()
      const animation = wx.createAnimation({
        duration: this.duration,
        timingFunction: 'linear',
      })
      let translateY = show? 0: -height
      let translateYHeight = -height
      if (this.data.direction === 'bottom') {
        translateY = show? 0: viewHeight
        translateYHeight = viewHeight
      }
      animation.translateY(translateY).step()
      return {
        style: `transform: translateY(${translateYHeight}px)`,
        animationStep: animation.export()
      }
    },
    // 中间动画
    async centerAnimationStep(show) {
      const animation = wx.createAnimation({
        duration: this.duration,
        timingFunction: 'linear',
      })
      let x = 1
      let y = 1
      if (show === false) {
        x = 0
        y = 0
      }
      animation.scale(x, y).step()
      return {
        animationStep: animation.export()
      }
    },
    // 显示隐藏
    opacityAnimationStep(show) {
      const animation = wx.createAnimation({
        duration: this.duration,
        timingFunction: 'linear',
      })
      animation.opacity(show? 1: 0).step()
      return animation.export()
    },
    _getViewWidthHeight() {
      return new Promise((resolve) => {
        const query = this.createSelectorQuery()
        query.select('.pop-mask-view').boundingClientRect()
        query.select('.pop-content').boundingClientRect()
        query.exec((res) => {
          try {
            const view = res[0]
            const content = res[1]
            resolve({
              viewWidth: view.width? view.width: 0, 
              viewHeight: view.height? view.height: 0, 
              width: content.width? content.width: 0, 
              height: content.height? content.height: 0
            })
          } catch (error) {
            resolve({
              viewWidth: 0,
              viewHeight: 0,
              width: 0,
              height: 0
            })
          }
        })
      })
    },
  }
})
