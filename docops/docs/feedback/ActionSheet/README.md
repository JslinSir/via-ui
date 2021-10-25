### 模态弹出操作 ActionSheet
  模态弹出操作栏组件


### 示例代码
* 基本使用
  
```
wxml：
<via-actionSheet id="actionSheet"  actionData="{{actionData}}" bind:onClick="handleActionClick" bind:onClose="handleClose"/>

```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| maskClose | mask自动关闭 | Boolean | true | |
| zIndex | 操作栏遮罩 层级 | Number | 2  | |
| title | 操作栏头部标题 | String | '' | |
| cancelText | 取消文案 | String | 取消 | |
| cancelTextSize | 取消文案大小 | Number | 32 rpx | |
| cancelTextColor | 取消文案颜色 | String | #323232 |  |
| lineHeight | 每个操作栏高度 | Number | 100 | |
| textSize | 文案大小 | Number | 32 rpx | |
| textColor | 文案颜色 | String | #323232 | | 
| actionData | 操作栏数据源 | Array |[ ]|  {name}  键值 有name ,其他值自定义，想要回传的键值  |
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-action-title | 操作栏标题外部样式 | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|   | - |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClick | 操作栏点击事件 | 当前点击的item |  |
| onClose | 模态操作栏关闭时触发 | '' |  | |
  
  
### 组件内部方法
| 名称 | 说明 | 入参 | 返回值 | 备注 |
| --- | --- | --- |--- |--- |
| show | 展示 | '' | ''  | |
| hide | 关闭 | ''  | '' | | |  
### 方法
通过 selectComponent 可以获取到 PopModal 实例，并调用实例方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 显示 | - | -   |
| hide | 隐藏 | - | -   |
