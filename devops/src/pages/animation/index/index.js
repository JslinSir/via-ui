
// 过渡 骨架 抛物线
const config = [
  {
    name: 'Transition 过渡动画',
    nav: '../transition/transition'
  },
  {
    name: 'Skeleton 骨架动画',
    nav: '../skeleton/skeleton'
  },
  {
    name: 'parabola 抛物线',
    nav: '../parabola/parabola'
  },
   
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