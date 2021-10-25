### 加载更多 LoadingMore  
  一般用于上拉加载文案显示，以及底部加载完 提示没有更多等


### 示例代码
* 基本使用
```
  <via-loadingMore  />
```
* 自定义文案
```
<via-loadingMore  loadingText="客官别急，努力加载中..."/>
```
* loading:false noMore:true 没有更多
```
<via-loadingMore noMore  loading="{{false}}"  />
```
* noMore:true  自定义文案
```
 <via-loadingMore noMore  loading="{{false}}"   noMoreText="- 我是有底线的 -"/>
```


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| loadingText | 加载文案| String | 加载中... |  |
| loading | 加载状态 | Boolean | true | |
| noMore | 加载完成状态 | Boolean| false | |
| noMoreText | 加载完成文案 | String | 没有更多啦~| | |



### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
|  - | -  | -  |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| -  | -  | -  |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| - | - | - | -  |



