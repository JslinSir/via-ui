### 日期选择器范围 DatePickerRange  
  时间选择器 用于时间选择


### 示例代码
* 基本使用
```
<via-date-range-picker 
id="datepicker" 
mode="{{mode}}"
value="{{value}}"
activeColor="{{activeColor}}"
confirmColor="{{activeColor}}"
rangeTitle="{{rangeTitle}}" 
bind:onChange="handleChange" 
showUnitText="{{showUnitText}}" 
bind:onConfirm="handleConfirm" 
dateTextFormatChart="{{dateformate?dateformate:'-'}}" />
// js:
 this.selectComponent('#datepicker').show()
```
 
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| autoClose | 自动关闭 | Boolean | true | |
| dateTextFormatChart | 选中的日期文案格式化字符 | String| - |    |
| dateValFormatChart | 选中的日期值文案格式化字符 | String | - | |
| timeTextFormatChart | 选中的时间文案格式化字符 | String | : | |
| timeValFormatChart | 选中的时间值文案格式化字符 | String | : | |
| value | 日期默认展示 | Array | [] | 日期时间[[YY,MM,DD,HH,MM,SS],[YY,MM,DD,HH,MM,SS]] |
| maskClose | 点击遮罩是否关闭 | Boolean | true | |
| confirmColor | 确认按钮颜色 | String | #0a1d66 | |
| resetColor | 重置按钮颜色 | String | #323232 | |
| titleColor | 标题文案颜色 | String | #999999 | |
| activeColor | 选中时间文案颜色 | String |  #0a1d66 | |
| isUnitZero | 显示时是否补齐0 | Boolean | true | | |
| showUnitText | 是否展示单位 | Boolean | true | | 文案,如：年月日，时分秒这些 |
| rangeTitle | 标题 | Array | [] | | 开始标题，结束标题 |
| noActiveColor | 未选中tab 文字颜色 | String | #323232 | | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| --- | --- | --- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange| 时间改变触发 | Array 当前选中时间 | 例如：[2021,4,12] |
| onRest| 重置触发事件 |   |  |
| onConfirm| 点击确认时触发 |   |  | |
