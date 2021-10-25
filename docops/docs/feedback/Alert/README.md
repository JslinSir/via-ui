### 提示框 Alert  提示框
  提示框，对话框组件


### 示例代码
* 基本使用
  
```
wxml：
<via-alert id="alert" />
js：
 this.selectComponent('#alert').alert({title: 'Via UI', okText: '加油💪🏻', content: '你所看到的是via用心呈现的'})
 this.selectComponent('#alert').confirm({okText: '是的', cannelText: '否', content: '准备使用 Via UI ？'})
 <!-- 数组形式 -->
const content = ['周一 09:00', '周一 09:00', '周一 09:00']
this.selectComponent('#alert').alert({title: '我是标题', okText: '我知道了', content, style: "line-height: 60rpx;text-align: center"})
```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| title | 标题 | String | '' | |
| maskClosable | 点击遮罩是否可以关闭 | Boolean | false | |
| content | 提示内容 | String | '' | |
| contentIsArray | 提示是否为数组形式 | Boolean | false | |
| mask | 是否开启蒙层遮罩 | Boolean | true |  |
| alertConfirm | 是否为对话框 | Boolean | false | |
| cannel | 取消按钮显示 | Boolean | true | |
| ok | 确认按钮显示 | Boolean | true | |
| cannelText | 取消按钮文案 | String | 取消 | |
| okText | 确认按钮文案 | String | 确认 | |
| okColor | 确认按钮颜色 | String | #FF5100 | |
| opacity | 蒙层透明度 | Boolean | true | |
| style | 样式 | String | '' | | |
 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| alert | 提示框自定义插槽 |   - |
| confirm | 对话框自定义插槽 | - |


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| |  |  |  | |
  
### 说明

建议使用 selectComponent 的方式
