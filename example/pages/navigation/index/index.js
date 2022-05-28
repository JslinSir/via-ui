
const config = [
  {
    name: 'tab 选项栏',
    nav: '../tab/tab'
  },
  {
    name: 'navTab 底部切换栏',
    nav: '../navTab/navTab'
  },
  {
    name: 'navigation 导航栏',
    nav: '../navigation/navigation'
  },
  
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