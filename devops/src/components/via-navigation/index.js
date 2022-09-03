
import { NavigationDefaultProps } from './props'

/**
 * 导航组件
 * 导航组件的层级为9
 * title 为3 
 * 导航icon 层级为4 
 * 所以弹出层要高于层级
 */
Component({
  options: { multipleSlots: true },
  properties: NavigationDefaultProps,
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