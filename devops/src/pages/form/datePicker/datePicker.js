Page({
  data: {
 
  },
  onLoad(options) {
     this.$datePicker = this.selectComponent('#datepicker') 
  },

  handleBtnClick(e){
    console.log(e)
    let { dateformate,showunit:showUnit,title,mode } = e.currentTarget.dataset
     showUnit = showUnit === '0' ? false:true
    this.setData({
      dateformate,
      showUnitText:showUnit,
      title:title?title:'',
      mode:mode?mode:'date'
    },()=>{
      this.$datePicker.show()
    })
    
  },



  handleChange(e){
    console.log("value:",e.detail.value)
 

  },
  handleConfirm(e){
    console.log("e:",e)
    const { value } = e.detail
    this.setData({selectValue:value})
    wx.showToast({
      title: value,
      icon:"none"
    })
  },

   
});