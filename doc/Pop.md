### via-pop  弹出层
  弹出层组件


### 示例代码
* 基本使用
  
```
wxml：
<via-pop id="pop" direction="bottom" />

js:
     this.$pop = this.selectComponent('#pop')
     this.$pop.show()

```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| maskClose | 点击遮罩是否关闭弹出层 | Boolean | true | |
| show | 弹出层是否展示 | Boolean | false | |
| direction | 弹出层弹出方向 | String | bottom |   bottom top center,left right |
| zIndex | 遮罩层级 | Number | 10 | | |
 
 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - |  | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|   | 自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| - | - | - |  | |
 
  
### 说明

建议使用 selectComponent 的方式
