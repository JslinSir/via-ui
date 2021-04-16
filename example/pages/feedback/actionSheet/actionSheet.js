// example/pages/feedback/actionSheet/actionSheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionStatus:false,
    actionData:[{name:'拍照'},{name:'从相册选择'}],
    actionData2:[
      {name:'item1'},{name:'item2'},{name:'item3'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  handleClick(){
 
    this.actionSheet = this.selectComponent('#actionSheet')
    this.actionSheet.show()
  },

  handleClose(){
    wx.showToast({title:'点击了取消',icon:'none'})
  },
  handleActionClick(e){
    wx.showToast({title:`点击了${e.detail.name}`,icon:'none'})
  },

  
  handleClick2(){
   this.setData({actionStatus:true})
  },

  handleClose2(){
    wx.showToast({title:'点击了取消',icon:'none'})
  },
  handleActionClick2(e){
    wx.showToast({title:`点击了${e.detail.name}`,icon:'none'})
  }

})