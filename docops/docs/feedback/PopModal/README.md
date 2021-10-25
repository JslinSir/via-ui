### 弹出层模态框 PopModal 
  弹出层模态框组件


### 示例代码
* 基本使用
  
```
wxml：
<via-popModal  id="popModal3" direction="bottom" bind:confirm="handleConfirm"  confirm>
  自定义内容
</via-popModal>
js:
   this.$popModal = this.selectComponent('#popModal')
   this.$popModal.show()

```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| title | 弹出层标题 | String | '' | |
| maskClose | mask自动关闭 | Boolean | true | |
| height | 模态框高度 | Number | 750 rpx | |
| hasCloseIcon | 是否有关闭的Icon | Boolean | true | |
| direction | 模态弹出方向 | String | bottom center | |
| confirm | 是否是 确认 取消形式 | Boolean | false | 只有 direction==bottom 时候生效 |
| cancelTex | 取消文案 | String | 取消 | |
| confirmTex | 确认文案 | String | 确认 | |
| texSize | 文案大小 | Number | 32 rpx | | 
| cancelColor | 取消文案颜色 | String | #333 | |
| confirmColor | 确认文案颜色 | String | #1976D2 | | |
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-pop-bottom-view | 底部弹出模态外部样式 | - |
| class-pop-center-view | 中间弹出模态外部样式 | - |
| class-header-title | 模态弹出层 标题外部样式 | - |

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|   | 自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClose | 关闭时触发 | '' |  |
| onConfirm | 点击确认时候触发 | '' | confirm 形式时触发  |
  
### 方法
通过 selectComponent 可以获取到 PopModal 实例，并调用实例方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 显示 | - | -   |
| hide | 隐藏 | - | -   |
