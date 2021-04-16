### via-datePicker  时间选择器
  时间选择器 用于时间选择


### 示例代码
* 基本使用
```
<via-datePicker  bind:change="handleChange" value="{{selectValue}}"  bind:confirm="handleConfirm" visible="{{visible}}"/>
```
*  自定义
```
<via-datePicker beginRange="3" endRange="2"  visible="{{visibl2}}"  title="请选择日期" class-header-title="title" confirmColor="red" cancelColor="#999"/>
```
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| visible | 显示时间选择器组件 | Boolean | false |  |
| title | 标题 | String | '' | |
| value | 默认选中的时间 | Array| [ ] |  [2021,4,11]  |
| beginRange | 日期开始选择的范围 | Number | 2 | |
| endRange | 日期结束选择的范围 | Number | 2 | |
| maskClose | 点击蒙层是否关闭 | Boolean | false | |
| cancelTex | 左侧取消文案 | String | '取消' | |
| confirmTex | 右侧确认文案 | String | '确认' | |
| texSize | 文案尺寸 | Number | 32 rpx | |
| cancelColor | 取消文案颜色 | String | '#333' | |
| confirmColor | 确认文案颜色 | String | '#1976D2' | |
| isShowYearUnit | 显示时是否展示年 | Boolean |  false | |
| isUnitZero | 显示时是否补齐0 | Boolean | false | | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-header-title | 头部外部样式 | --- |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| --- | --- | --- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange| 时间改变触发 | Array 当前选中时间 | 例如：[2021,4,12] |
| onClose| 选择器关闭时触发 |   |  |
| onDismiss| 取消时触发 |   |  |
| onConfirm| 点击确认时触发 |   |  | |
