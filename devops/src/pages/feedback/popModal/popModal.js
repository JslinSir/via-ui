Page({
  data: {
    hasCloseIcon:true
  },
  onLoad(options) {

  },
  handleBtnClick(e){
    const { direction,icon } = e.currentTarget.dataset
    this.setData({direction,hasCloseIcon:icon?true:false})
    this.$popModal = this.selectComponent('#popModal')
    this.$popModal.show()
  },

  handleBtnClick2(e){
    const { direction,icon } = e.currentTarget.dataset
    this.setData({direction,hasCloseIcon:icon?true:false})
    this.$popModal2 = this.selectComponent('#popModal2')
    this.$popModal2.show()
  },

  handleBtnClick3(e){
    const { direction } = e.currentTarget.dataset
    this.setData({direction})
    this.$popModal3 = this.selectComponent('#popModal3')
    this.$popModal3.show()
  },
  handleConfirm(){
    wx.showToast({
      title: '点击了确认',
    })
    this.$popModal3.hide()
  },
});