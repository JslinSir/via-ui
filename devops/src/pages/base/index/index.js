
const config = [
  {
    name: 'Button 按钮',
    nav: '../button/button'
  },
  {
    name: 'Icon 图标',
    nav: '../icon/icon'
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