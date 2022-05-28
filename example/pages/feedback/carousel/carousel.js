Page({
  data: {
    swiperList:[1,2,3,4],
    curentSwiperIndex:0
  },



  handleSwiperChange(e){
    this.setData({curentSwiperIndex:e.detail})
    console.log('当前下标:',e.detail)
  },
 
});