Page({
  data: {
    carouselText:[
      '搜索热词',
      '加肥加大卫衣',
      '夏季换新装'
    ],
    value:'初始化值'
  },
  onLoad(options) {

  },
  handleClickSearchText(e){
    wx.showToast({
      title: `点击搜索词：${e.detail}`,
      icon:'none'
    })
  },
  handleChange(e){
    wx.showToast({
      title: `输入的值变化了：${e.detail}`,
      icon:'none'
    })
   this.setData({value:e.detail})
  },
});