Page({
  data: {
    visible:false,
    visibl2:false,
    selectValue:[2021,3,17]
  },
  onLoad(options) {

  },

  handleBtnClick(){
    this.setData({visible:true})
  },

  handleBtnClick2(){
    this.setData({visibl2:true})
  },

  handleChange(e){
    console.log("value:",e.detail.value)
    this.setData({selectValue:e.detail.value.toString().replace(/,/g,'-')})

  },
  handleConfirm(e){
    console.log("e:",e)
    wx.showToast({
      title: e.detail.value.toString().replace(/,/g,'-'),
      icon:"none"
    })
  },

   
});