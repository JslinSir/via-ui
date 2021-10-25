/**
 * @description: 小程序下拉刷新上拉加载组件
 * @author:jiangsenlin
 * 
 */
import pagingBehavior from './paging'
import statusBehavior from './status'

Component({
 behaviors: [pagingBehavior,statusBehavior],
 options: {
   multipleSlots: true
 },
 properties: {
   // 滚动视图高度
   height: {
     type: Number,
     value: 0
   },

   //默认关闭下拉刷新时间  5秒
   autoCloseFresh: {
     type: Boolean,
     value: true
   },

 },
 data: {
   // 下拉状态
   pullStatus: false,

   // 滚动scroll高度
   scrollHeight: 0,

 },
 lifetimes: {

   attached() {},

   ready() {
     if (!this.data.height) {
       // 如果没有设置高度，默认获取高度
       this.getScrollHeight()
     }else{
       this.setData({scrollHeight:this.properties.height})
     }
   },

   detached() {

   },
 },
 methods: {
 

   // 下拉
   async handlePull(e) {

     this.triggerEvent('onScroll', e)

   },

   // 触发
   handleRefresh(e) {
     this.setData({
       pullStatus: true,
     }, async () => {

       this.triggerEvent('onPullDown', '')

       if(this.data.autoCloseFresh && this.data.pullStatus){
         setTimeout(() => {
           this.stopPullDownRefresh()
         }, 1000 * 5)
       }

      

     })

   },

   // 滚动到顶部
   scrollTop() {

     this.setData({ scrollTop: 0 })

   },

   // 停止下拉刷新
   stopPullDownRefresh() {
     this.setData({
       pullStatus: false
     })
   },

   // 下拉刷新被中止
   handleAbort(e) {
     this.setData({
       pullStatus: false
     })
   },


   // 上拉触底
   handleScrollBottom(e) {
     if (!this._loading && this.hasNextPage) {
       this.pageNum += 1
       this.triggerEvent('onPullUp', '')
     }
   },

   /**
   * 获取滚动高度 screenHeight - 当前滚动元素距离顶部top
   */
   async getScrollHeight() {

     const res = await this.SelectorQuery(this, ['._scroll-view'])
     this.setData({
       scrollHeight: res.screenHeight - res._scrollview.top
     })
   },

   SelectorQuery(self, selector, selectorAll) {
     return new Promise((resolve, reject) => {
       try {
         const query = self.createSelectorQuery()
         const selectorList = []
         selector && selector.map((v) => {
           selectorList.push(v.replace(/\#|\.|\-/g, ''))
           query.select(v).boundingClientRect()
         })
         selectorAll && selectorAll.map((v) => {
           selectorList.push(v.replace(/\#|\.|\-/g, ''))
           query.selectAll(v).boundingClientRect()
         })
         query.exec((res) => {
           const resData = {
             screenHeight: wx.getSystemInfoSync().screenHeight
           }
           selectorList.map((v, index) => {
             resData[v] = res[index] ? res[index] : {}
           })
           resolve(resData)
         })
       } catch (error) {
         reject(error)
       }
     })
   },

 },
});