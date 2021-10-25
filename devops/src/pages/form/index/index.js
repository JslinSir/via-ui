
// searchBar datePicker Calendar  switch radio
const config = [
  {
    name: 'SearchBar 搜索条',
    nav: '../search/search'
  },
  {
    name: 'Switch 开关',
    nav: '../switch/switch'
  },
  {
    name: 'Radio 单选项',
    nav: '../radio/radio'
  },
  {
    name: 'DatePicker 日期选择',
    nav: '../datePicker/datePicker'
  },
  {
    name: 'Calendar 日历',
    nav: '../calendar/calendar'
  },
  // {
  //   name: 'Editor 编辑器',
  //   nav: '../editor/editor'
  // }
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