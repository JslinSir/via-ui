/**
 * 导航组件
 * 导航组件的层级为9
 * title 为3 
 * 导航icon 层级为4 
 * 所以弹出层要高于层级
 */
Component({
  options: { multipleSlots: true },
  properties: {

    showIcon: { //是否展示icon
      type: Boolean,
      value: true
    },
    iconSrc: { // icon 自定义的路径，绝对路径
      type: String,
      value: ''
    },
    iconSize: { //icon 尺寸
      type: Number,
      value: 36
    },
    iconColor: { //icon 颜色
      type: String,
      value: '#323232'
    },
    bg: { //导航背景色
      type: String,
      value: '#fff' // 默认白色
    },
    round: { //回到首页是否开启圆环样式
      type: Boolean,
      value: true
    },
    // 默认占用高度
    placeholder: {
      type: Boolean,
      value: true
    },
    // 标题
    title: {
      type: String,
      value: ''
    },
    titleColor:{
      type: String,
      value: '#323232'
    },
    titleSize:{
      type: Number,
      value: 36
    },
    tip: {
      type: Boolean,
      value: false
    },
    tipsText:{
      type: String,
      value: '微信首页下拉可快速找到我'
    },
    opacity: {
      type: Number,
      value: 1
    },
    tipsAutoDisTime: {
      type: Number,
      value: 0
    },
    homeRoute: { // 首页路径 如果存在会回到首页，否则触发回到首页的监听
      type: String,
      value: ''
    },
    triggerBack: { //是否开启回退监听，如果开启直接回退，否则，触发监听手动回退
      type: Boolean,
      value: false
    },
  },
  observers: {
    tip(status) {
      if (status && this.properties.tipsAutoDisTime) {
        setTimeout(() => {
          this.close('fade')
        }, 1000 * this.properties.tipsAutoDisTime )

      }
    },
  },
  data: {
    menuHeight: 0,
    menuTop: 0,
    contentWidth: 0,
    tipOpacity: 1,
    platform: null,
    // 是否返回首页
    backHome: true
  },
  ready() {

    const system = wx.getSystemInfoSync()
    this.screenWidth = system.screenWidth
    const pages = getCurrentPages()
    // 胶囊按钮位置信息
    this.menuButton = wx.getMenuButtonBoundingClientRect();

    const pagesLength = pages.length

    this.setData({
      menuHeight: this.menuButton.height,
      menuTop: this.menuButton.top,
      // 是否返回 首页
      backHome: !(pagesLength > 1)
    })
  },
  methods: {
    navigateBack() {
      if (this.data.triggerBack) {
        this.triggerEvent('onBack')
        return
      }

      if (!this.data.backHome) {
        wx.navigateBack()
        return
      }

      if (this.properties.homeRoute) {
        wx.reLaunch({ url: `${this.properties.homeRoute}` })
      } else {
        this.triggerEvent('onBackHome')
      }


    },
 
 
    close(e) {
      if(e == 'fade'){
        this.animate('.mp-navigation-tip', [
          { opacity: 1},
          { opacity: 0 },
          ], 300, function () {
            this.setData({ tip: false })
        }.bind(this))
    
      }else{
        this.setData({ tip: false })
      }
      
    },
    // 顶部渐变显示
    setScrollTop(scrollTop, distance) {
      let opacity = scrollTop / distance
      if (opacity >= 0.9) {
        opacity = 1
      }
      if (opacity < 1) {
        this.setData({ opacity })
      } else {
        if (this.data.opacity !== 1) {
          this.setData({ opacity })
        }
      }
    },
    // 获取nav数据
    getNavData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const query = this.createSelectorQuery()
          query.select('.mp-navigation').boundingClientRect((res) => {
            resolve(res)
          })
          query.exec()
        }, 10)
      })
    },
    
  }
})