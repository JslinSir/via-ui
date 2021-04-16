// example/pages/form/radio/radio.js
Page({
  handleClick(e){
   if(e.detail){
      wx.showToast({
        title: '选中了',
        icon:'none'
      })
   }
  },
})