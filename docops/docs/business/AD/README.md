### 广告 Ad
   包含弹窗广告，全屏广告


### 示例代码
* 基本使用
  
```
wxml:
<via-ad id="adId" >
    <image class="ad" src="./ad.png" />
</via-ad>
js:
 <!-- 传入开始节点 结束节点位置 -->
 this.ad = this.selectComponent('#adId')
 this.ad.show()

```
 
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| type |  广告类型 |  String | modal |modal:弹窗，full：全屏 |
| visible |  是否可见 |  Boolean | false |  |
| clickClose |  点击遮罩区域是否可关闭 |  Boolean | true |  |
| iconName |  关闭按钮的icon |  String | roundclose |  |
| actionPosition | 关闭按钮的位置 |  String | bottom  top |  |
| duration |  广告时长 |  Number | 4 |  如果是开屏广告 时长生效 |
 
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-ad-content | 广告内容外包样式 | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
|  -  |  内容自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClose |  广告关闭时触发  |  '' |  | |
 
  
