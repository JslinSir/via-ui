### 下拉刷新上拉加载 ScrollPullEffect  
   下拉刷新上拉加载组件


### 示例代码
* 基本使用
```
<via-scroll-pull-effect 
       id="via-scroll-pull-effect-id" 
       bind:onPullDown="handlePullDown"
       bind:onPullUp="handlePullUp"
       height="500"
       >
      
        <view class="item-card"  wx:for="{{list}}" wx:key="unique">
           {{index+1}}
        </view>
       
      </via-scroll-pull-effect>
```

* 分页使用
```
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
```
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 | 
| --- | --- | --- | --- | --- |
| height | scroll高度 | Number | - |  如果没有传值，者为屏幕高度 |
| autoCloseFresh | 是否开启自动下拉刷新关闭 | Boolean | true |  5s自动关闭 |
 
 

 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | -  |
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
 | -| - | 滚动内容 |  


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onScroll | 滚动监听事件 | - | -   |
| onPullDown | 下拉触发事件 | - | -   |
| onPullUp | 上拉触发事件 | - | -   |


### 方法
通过 selectComponent 可以获取到 ScrollPullEffect 实例，并调用实例方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| setPageLoading | 设置页面加载状态 | - | -   |
| setPageError | 设置页面错误状态 | - | -   |
| setPageEmpty | 设置页面空状态 | - | -   |
| initPage | 初始化分页函数 | 请求参数, 请求 Promise 函数 | -   |
| pullDownLoad | 下拉触发函数 | 参数，处理函数，回调 |  list  |
| pullUpLoad | 上拉触发函数 |参数，处理函数，回调 | list  |
| stopPullDownRefresh | 下拉停止函数 |  |    |

