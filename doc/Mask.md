### via-mask  遮罩层
  遮罩层组件


### 示例代码
* 基本使用
  
```
wxml：
<via-mask id="maskId" >
    <view style="margin-top:100rpx;margin-left:50%" >
        	 这里为自定义的内容
    </view>
</via-mask>
js:
    this.$mask = this.selectComponent('#maskId')
    this.$mask.show()

```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| visible | mask 是否可见 | Boolean | false | |
| zIndex | mask 层级 | Number | 10 | |
| clickClose | 点击遮罩区域是否可关闭 | Boolean | true | ||
 
 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|   | 自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClose | 关闭时触发 | '' |  |
| onClickClose | 点击遮罩区域触发 | '' |  ||
  
### 说明

建议使用 selectComponent 的方式
