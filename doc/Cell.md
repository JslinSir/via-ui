### via-cell  单元栏
   用于 信息的展示，以及导航跳转的单元栏


### 示例代码
* 基本使用
```
<via-cell leftText="订单列表" rightIconName='' />
```
*  左边带icon
```
<via-cell leftText="订单列表" leftIconName="calendar" rightIconName='' />
```
* 右边带icon
```
<via-cell leftIconName="my" rightIconName="right">我的</via-cell>
```
* 右边带文案
```
 <via-cell leftIconName="my" rightText="查看更多" rightIconName="right">我的</via-cell>
```
* 自定义 
```
 <via-cell height="60" width="420" radius="30" leftText="我的" leftIconName="my" rightText="查看更多" rightIconName="right" />
```
*  左侧slot自定义
```
<via-cell rightText="查看更多" rightIconName="right">
   <view slot="left" class="custom-left-view">
        <text class="text-custom">进度名称：审核中</text>
        <text class="text-custom">时间：2021-03-21</text>
    </view>
</via-cell>
```
*  右侧slot自定义
```
<via-cell rightText="查看更多" rightIconName="right">
   <view slot="right" class="custom-left-view">
        <text class="text-custom">进度名称：审核中</text>
        <text class="text-custom">时间：2021-03-21</text>
    </view>
</via-cell>
```
* 不带透明度
```
  <via-cell leftText="审核详情" touchOpacity="1" />
```
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| height | cell高度 | Number | 88 rpx |   |
| width | cell宽度 | Number | '' |  跟随父容器 |
| radius | cell圆角 | Number | 10 rpx | |
| leftText | 左边文案 | String | '' | |
| leftTextSize | 左边文案大小 | Number | 28 rpx |  |
| leftTextColor | 左边文案颜色  | String | #323232 |   |
| leftIconName | 左边图标 | String | '' | |
| leftIconSrc | 左边远程图标 | String | '' | | 
| leftIconColor | 左边颜色 | String | '' | |
| rightText | 右边文案 | String | '' | | 
| rightTextSize | 右边文案大小 | Number | 28 rpx | |
| rightTextColor | 右边文案颜色 | String | #ccc | |
| rightIconSize | 右边图标大小 | Number | 28 | | 
| rightIconName | 右边图标名称 | String | right | |
| rightIconColor | 右边图标颜色 | String | #ccc | | 
| rightIconSrc | 右边远程图标 | String | '' | | 
| touchOpacity | 点击的不透明度 | Number | 0.6 | | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-cell-view | 单元栏外部样式 | -  |
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
| left | 左侧自定义插槽 | -  |
| right | 右侧自定义插槽 | -  |

### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClick| 点击事件 | - | -   |



