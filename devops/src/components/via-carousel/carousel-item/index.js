 /**
  * 旋转木马，子容器
  */

Component({
  externalClasses: ["class-active"],
  /**
   * 组件的初始数据
   */
  properties:{ },
  data: {
    // 是否选中
    active:false,
    // 未显示的轮播缩放程度
    scale:0.7
  },

  relations: {
    '../carousel-view/index': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function(target) { },
      linkChanged: function(target) { },
      unlinked: function(target) {}
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
 
    update(params){
      this.animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 500,
        timingFunction: "ease-out",
        delay: 0
      })
      this.setData({
        active:params.active,
        scale:params.scale
      })
    },



  // 动画
  animationToLarge: function (x) {
    this.animation.translateX(x).scale(1).step()
    this.setData({
      animationToLarge: this.animation.export(),
    })
  },
  animationToSmall: function (x) {

    this.animation.translateX(x).scale(0.7).step()
    this.setData({
      animationToSmall: this.animation.export(),
    })
  },
  }
})
