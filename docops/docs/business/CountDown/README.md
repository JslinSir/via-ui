### 倒计时 CountDown  倒计时
   倒计时组件


### 示例代码
* 基本使用
  
```
wxml:
<via-countDown  date="2022-01-01"/>
 

```
 
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| startDate |  开始的时间戳 |  Number | 0 |  |
| endDate |  结束的时间戳 |  Number | 0 |  |
| date |  从哪天开始倒计时 |  String | '' | YYYY-MM-DD  |
| isShowDay |  是否展示天 |  Boolean | true |   |
| hu |  小时的单位 |  String | 时 |  |
| mu | 分的单位 |  String | 分   |  |
| su |  秒的单位 |  String | 秒 | ||
 
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-down-style | 倒计时容器的外部样式 | - |
| class-day-style | 天的外部样式 | - |
| class-time-style | 时分秒倒计时外部样式 | - |
| class-u-style | 单位的外部样式 | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|  -  |  - |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onStart |  开始时触发  |  '' |  | 
| onEnd |  结束时触发  |  '' |  | |
  
