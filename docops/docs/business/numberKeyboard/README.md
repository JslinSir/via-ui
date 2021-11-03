### 数字键盘 NumberKeyboard  数字键盘
   数字键盘组件


### 示例代码
* 基本使用
  
```
wxml:
<via-number-keyboard 
title="{{title}}"
id="via-number-keyboard" 
bind:onInput="handleInput" 
bind:onDelete="handleDelete"
bind:onConfirm="handleConfirm"
confirmText="{{confirmText}}"
confirmBg="{{confirmBg}}"
confirmLoading="{{loading}}"
configmDisabled="{{configmDisabled}}"
float="{{float}}"/>
 

```
 
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| title |  键盘标题 |  String | 数字键盘 |  |
| confirmText |  键盘 确认按钮文案 |  String | null | 为null,则不显示确认按钮 |
| float |  是否开启小数点 |  Boolean | false |    |
| vibrate |  是否开启震动  |  Boolean | #0a1d66 |   |
| confirmBg |  确认按钮颜色 |  String | 时 |  |
| confirmLoading | 确认按钮loading状态 |  Boolean | false   |  |
| configmDisabled |  确认按钮禁用状态 |  Boolean | false | ||
 
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
 
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|  -  |  - |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onInput |  键盘输入事件  |  v | 当前点击键盘的值  | 
| onDelete |  键盘删除事件  |  '' |  | |
| onConfirm |  键盘点击确认事件  |  '' |  | |
| onClose |  键盘关闭事件  |  '' |  | |
  
