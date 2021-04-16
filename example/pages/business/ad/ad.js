Page({
  data: {
    iconPosition: 'bottom',
  },
  onLoad(options) {
    this.ad = this.selectComponent('#adId')
    this.adIdFull = this.selectComponent('#adIdFull')
  },

  handleClick(e) {
    const { position, icon } = e.currentTarget.dataset
    // debugger
    this.setData({ iconPosition: position, icon })
    this.ad.show()
  },


  handleClick2(e) {
    this.adIdFull.show()
  },
});