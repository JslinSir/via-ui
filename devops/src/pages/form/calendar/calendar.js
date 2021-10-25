Page({
  data: {
    data:null
  },
  onLoad(options) {

  },
  handleOption(){
    this.$calendar = this.selectComponent('#calendar')
    this.$calendar.show()
  },
  handleConfirm(e){
    const ar = e.detail
    this.setData({data:ar})
  },
});