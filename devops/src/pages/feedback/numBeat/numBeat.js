Page({
  data: {

  },
  handleBtnClick(e){
    const { direction } = e.currentTarget.dataset
    this.setData({direction})
    this.$pop = this.selectComponent('#pop')
    this.$pop.show()
  },
});