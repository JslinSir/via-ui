### 日历 Calendar  
  用于日历选择的组件


### 示例代码
* 基本使用
```
<via-calendar id="calendar" bind:onConfirm="handleConfirm"/>

```
 
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| type | 选中类型 | String | multiple | single(单选) multiple(多选) |
| date | 默认选中的时间 | Array| [  ] |  YYYY-MM-DD | 
| height | 选择器高度 | Number | 1100 rpx | | 
| cancelColor | 取消 字体颜色 | String| #333 | |
| confirmColor | 确认 字体颜色 | String| #1976D2 |  | 
| clickConfirmAutoClose | 点击确定 是否自动关闭 弹窗 | Boolean| true |  | 
| maskClose | 点击选择器外侧是否关闭  | Boolean| true |  | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| --- | --- | --- |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| --- | --- | --- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onConfirm| 点击确认触发 |  |  |
| onCancel| 点击取消触发 |  |  | |

### 方法
通过 selectComponent 可以获取到 Calendar 实例，并调用实例方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 显示日历 | - | -   |
| hide | 隐藏日历 | - | -   |
 
