### via-loadingMore  加载更多
  一般用于上拉加载文案显示，以及底部加载完 提示没有更多等


### 示例代码
* 基本使用
```
    <via-timeLine  dataSource="{{dataSource}}"/>
```
* 设置选中 current
```
<via-timeLine  dataSource="{{dataSource}}" current="2"/>
```
* 自定义选中色
```
 <via-timeLine  dataSource="{{dataSource}}" current="2" activeColor="#0188FF"  activeBorderColor="#e8f3fe"/>
```
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| current | 当前节点| Number | 0 |  |
| dataSource | 数据源 | Array  | [] |  数据源格式{ title, des}  |
| color | 普通状态下颜色 | String| #dadada ||
| activeColor | 选中节点高亮色 | String | #FF574C | |
| activeBorderColor | 选中节点border色 | String | #FFDAD7 |小程序的  border-color 不支持rgba  |


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



