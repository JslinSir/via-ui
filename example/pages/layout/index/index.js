
const config = [
  {
    name: 'Card 卡片',
    nav: '../card/card'
  },
  {
    name: 'Cell 单元栏',
    nav: '../cell/cell'
  },
  {
    name: 'IphoneX bottom safe 苹果x系列 底部安全区域',
    nav: '../iphonex/iphonex'
  }
]
Page({

  data: {
    config
  },

  handleJunmp(e){
    const { nav:url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },


})