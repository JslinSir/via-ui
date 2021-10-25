### 卡片 Card  
   用于卡片信息展示组件


### 示例代码
* 基本使用
```
  <via-card title="卡片标题">
      <view class="content">默认插槽内容</view>
    </via-card>
```
*  禁用边框和圆角
```
 <via-card title="卡片标题" dis-header-border rasius="0">
      <view class="content">默认插槽内容</view>
</via-card>
```
*  禁用头部
```
    <via-card title="卡片标题" dis-header>
      <view class="content">默认插槽</view>
    </via-card>
```
*  自定义标题
```
 <via-card  >
      <view slot="title">标题插槽</view>
      <view slot="extra" style="color:#666">查看更多</view>
      <view class="content">默认插槽</view>
    </via-card>
```
* 自定义 
```
 <via-card title="卡片标题" class-container="card-container" class-header="card-header" class-content="card-content">
      <view class="content">默认插槽内容</view>
      <view class="content">默认插槽内容</view>
      <view class="content">默认插槽内容</view>
    </via-card>
```
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| radius | 圆角 | Number | 20 rpx |   |
| disHeaderBorder | 是否禁用头部下方边框， | Boolean | false |  |
| disHeader | 是否禁用卡片头部 | Boolean | false | |
| title | 卡片标题 | String | '' | | |
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-container | 卡片容器外部样式 | -  |
| class-header | 卡片头部外部样式 | -  |
| class-content | 卡片内容外部样式 | -  |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
| title | 标题自定义插槽 | -  |
| extra | 头部右侧自定义插槽 | -  |
| - | 内容自定义插槽 | -  |

### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
|  |   | - | -   | |



