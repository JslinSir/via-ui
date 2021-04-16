Page({
  data: {
   data:[{
     name:'默认 无网络错误',
     type:'noNetwork'
   },
   {
    name:'404错误',
    type:'404'
  },
  {
    name:'500错误',
    type:'500'
  },
  {
    name:'图片加载失败',
    type:'imgError'
  },
  
  {
    name:'网络加载错误',
    type:'networkError'
  },
  {
    name:'无网络错误',
    type:'noNetwork'
  },
  {
    name:'无内容显示',
    type:'noCotent'
  },
  {
    name:'无订单',
    type:'noOrder'
  },
  {
    name:'无记录',
    type:'noRecord'
  },]
  },


  handleToFull(){
    wx.navigateTo({
      url: './full',
    })
  }
 
});