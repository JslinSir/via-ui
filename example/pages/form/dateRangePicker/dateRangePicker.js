Page({
  data: {
    value:[[2021,11,24],[2021,11,25]]
  },
  onLoad(options) {
     this.$datePicker = this.selectComponent('#datepicker') 
  },

  handleBtnClick(e){
    console.log(e)
    let { dateformate,showunit:showUnit,title,mode,color } = e.currentTarget.dataset
     showUnit = showUnit === '0' ? false:true
    this.setData({
      dateformate,
      showUnitText:showUnit,
      rangeTitle:title?['生效日期','失效日期']:'',
      mode:mode?mode:'date',
      activeColor:color?color:''
    },()=>{
      this.$datePicker.handleReset()
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
      title: value.toString(),
      icon:"none"
    })
  },

   
});