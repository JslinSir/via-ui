
const config = [
  {
    name: 'Card 卡片',
    nav: '../card/card'
  },
  {
    name: 'Cell 单元栏',
    nav: '../cell/cell'
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