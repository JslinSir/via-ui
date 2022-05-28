// image Tag Loading loadingMore  Timeline(时间轴) empty  step Progress  
const config = [
  {
    name: 'Loading 加载',
    nav: '../loading/loading'
  },
  {
    name: 'LoadingMore 加载更多',
    nav: '../loadingMore/loadingMore'
  },
  {
    name: 'Image 图片',
    nav: '../image/image'
  },
  {
    name: 'Tag 标签',
    nav: '../tag/tag'
  },
  {
    name: 'Timeline 时间轴',
    nav: '../timeLine/timeLine'
  },
  {
    name: 'Status 状态显示',
    nav: '../status/status'
  },
  {
    name: 'CarouselText 文字跑马灯',
    nav: '../carouselText/carouselText'
  },
  {
    name: 'SectionList 分组列表',
    nav: '../sectionList/sectionList'
  },
  {
    name: 'scrollPullEffect 下拉刷新上拉加载',
    nav: '../scrollPullEffect/scrollPullEffect'
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