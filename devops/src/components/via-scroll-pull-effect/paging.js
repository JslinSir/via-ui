/*
 * @Description: 分页函数
 */


module.exports = Behavior({
  behaviors: [],
  properties: {

  },
  data: {

    loadingMore:true

  },

  lifetimes:{

    attached(){

      this.pagingSeting = {  pageNum: 1, pageSize: 10 }
  
      this.pageNum =  this.pagingSeting.pageNum
      this.pageSize = this.pagingSeting.pageSize
      this._loading = false //加载loading 锁
  
      this.initialParams={}
  
    },

  },

 
  methods: {

    /**
     * 初始化page 请求入参 请求函数
     * @param {*} params  初始化分页的传参
     * @param {*} requestFn  初始化请求
     */
    initPage(params, requestFn) {
      this.pageNum =   this.pagingSeting.pageNum
      this.pageSize =  this.pagingSeting.pageSize
      this._requestFn = requestFn
      if(params && Object.keys(params).length>0){
        this.initialParams = {
          ...this.initialParams,
          ...params
        }
      }
    },

     /**
   * 初始化 首次 加载数据
   * @param {*} params  入参
   * @param {*} cb      请求成功后的回调
   * @param {*} handle  数据处理函数，用于处理请求结果数据
   */
  async initLoadData(params,handle, cb) {
    const mergeParams = {
      ...this.initialParams,
      ...params,
    }

    this.mergeParams = mergeParams

    // 不是上拉，触发 initLoad 重置 pageNum
    if(!this._loading ){

      mergeParams.pageNum = 1

      this.pageNum = 1

    }
    
    try{
        
      const {  data  } = await this._requestFn(mergeParams)

      const list = data.list || []

      const newList = typeof handle === 'function' ? handle(data) : list

      const hasNextPage = data.hasNextPage || false

      this.hasNextPage  = hasNextPage 

      this.setData({loadingMore:hasNextPage})

      typeof cb === 'function' && cb(newList)

      this.reSetPageSatatus()

      !this._loading && newList.length===0 && this.setPageEmpty()

      return {
        list:newList,
        hasNextPage,
      }

    }
    catch(e){

      this.setPageError()

      throw e

    }

   

  },


    /**
     * 下拉请求函数
     * @param {*} params 
     * @param {*} cb 
     * @param {*} handle 
     */
    async pullDownLoad(params,handle,cb) {

      this.pageNum =  this.pagingSeting.pageNum

      try{
        if(this._requestFn ){
          const { list,hasNextPage } = await this.initLoadData({
            ...this.mergeParams,
            ...params,
            pageNum:this.pagingSeting.pageNum,
            pageSize: this.pagingSeting.pageSize
          },handle,cb)

          this.reSetPageSatatus()

          list.length === 0 && this.setPageEmpty()

          this.hasNextPage  = hasNextPage 
  
          return { list,hasNextPage }  

        }

        if(this._loadrequestFn){

          return  this.loadData(params,handle,cb)

        }

      }catch(e){


      }finally{

        this.stopPullDownRefresh()

      }

      

    },

    /**
     * 上拉请求函数
     * @param {*} params 
     * @param {*} cb 
     * @param {*} handle 
     */

    async pullUpLoad(params,handle,cb) {
      this._loading = true
      const pagingParams = {
        ...params,
        ...this.mergeParams,
        pageNum:this.pageNum,
        pageSize: this.pagingSeting.pageSize
      }
      const { list,hasNextPage } = await this.initLoadData(pagingParams,handle,cb)

      this.hasNextPage = hasNextPage

      this._loading = false

      this.setData({loadingMore:hasNextPage})

      return list

    },

  }


});