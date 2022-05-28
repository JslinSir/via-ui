/**
 * 分页接口返回的数据结构
 * @param {*} params 
 */
const requestApi = (params)=>{
  return new Promise((revose,reject)=>{
    const nexPage =  {
      data:{
        list:params.pageNum ==3 ? []:[0,1,2,3,4,5,6,7,8,9],
        hasNextPage:params.pageNum ==3 ? false : true
      }
    }
    setTimeout(()=>{
      revose(nexPage)
    },1000)
  })
 
}

Page({
  data: {
    list:[]
  },

  async onLoad(){
    this.$scrollEffect = this.selectComponent('#via-scroll-pull-effect-id')
    this.$scrollEffect.initPage({},requestApi)

     const { list } = await this.$scrollEffect.initLoadData()
    this.setData({list})
  },




  async handlePullDown(){
    const { list } = await this.$scrollEffect.pullDownLoad()
    this.setData({list})
    this.$scrollEffect.stopPullDownRefresh() 
  },

  async handlePullUp(){
    const { list } = this.data
    const nexList = await this.$scrollEffect.pullUpLoad()
    console.log('nexList:',nexList)
    this.setData({list:list.concat(nexList)})
  
  },

  
});