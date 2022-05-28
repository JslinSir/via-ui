Page({
  data: {

  },


  handleBtnClick() {
    this.$mask = this.selectComponent('#maskId')
    this.$mask.show()
  },
  handleBtnClick2() {
    this.$mask2 = this.selectComponent('#maskId2')
    this.$mask2.show()
  },

  handleBtnClose() {
    this.$mask2.hide()
  },

});