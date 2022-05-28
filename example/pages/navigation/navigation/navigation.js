Page({
  data: {

  },
  onLoad(options) {

  },
  handleClick(e){
    wx.navigateTo({
      url: `./base?type=${e.currentTarget.dataset.type}`,
    })
  },
});