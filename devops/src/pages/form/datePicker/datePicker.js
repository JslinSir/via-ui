Page({
  data: {
    selectValue:[2021,3,17]
  },
  onLoad(options) {
     this.$datePicker1 = this.selectComponent('#datepicker1')
     this.$datePicker2 = this.selectComponent('#datepicker2')
  },

  handleBtnClick(){
    this.$datePicker1.show()
  },

  handleBtnClick2(){
    this.$datePicker2.show()
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