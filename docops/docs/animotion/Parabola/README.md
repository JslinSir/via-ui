### 抛物线 parabola  
   如：用于加入购物车这种动画效果


### 示例代码
* 基本使用
  
```
wxml:
<via-animotion-parabola  id="parabolaAnimotion"   >
  <text style="width:60rpx;height:60rpx;">{{curent}}</text>
</via-animotion-parabola>
js:
 <!-- 传入开始节点 结束节点位置 -->
 this.selectComponent('#parabolaAnimotion').run({
      x:startRef.left,
      y:startRef.top
    },{
      x:endRef.left,
      y:endRef.top
    })

```
 
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| start |  开始节点坐标信息 |  Object | {} | {x,y} |
| end |  结束节点坐标信息 |  Object | {} | {x,y} |
 
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|  -  |  内容自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
|  |  |  |  | |
 
  
