
// 倒计时，商品卡片，海报  清单项  ad(广告，弹窗 全屏)

const config = [
  {
    name: 'AD 广告组件',
    nav: '../ad/ad'
  },
  {
    name: 'countDown  倒计时',
    nav: '../countDown/countDown'
  },
  {
    name: 'numberKeyboard  数字键盘',
    nav: '../numberKeyboard/numberKeyboard'
  },
  {
    name: 'watermark  水印',
    nav: '../watermark/watermark'
  },
  {
    name: 'verificationCodeModal  验证码弹窗',
    nav: '../verificationCodeModal/verificationCodeModal'
  },
  // {
  //   name: 'clipImage  图片裁切',
  //   nav: '../clipImage/clipImage'
  // },
  // {
  //   name: 'ProductCard 商品卡片',
  //   nav: ''
  // },
  // {
  //   name: 'Poster 海报',
  //   nav: ''
  // },
  
]
Page({

  data: {
    config
  },

  handleJunmp(e){
    const { nav:url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },


})