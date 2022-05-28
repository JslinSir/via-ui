// pages/index/about/about.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCopyLink(e){
      // wx.navigateTo({
      //   url: `/pages/webview/webview?src=${e.currentTarget.dataset.url }`,
      // })
       wx.setClipboardData({ data:e.currentTarget.dataset.url })
    },
    handePreview(){
      wx.previewImage({
        current: '0', // 当前显示图片的http链接
        urls: ['https://6a73-jslin-fwqc3-1302163217.tcb.qcloud.la/callme.jpg?sign=3f7e4a504d064919abd3a936f22db39b&t=1618484689'] // 需要预览的图片http链接列表
      })
    },
  }
})
