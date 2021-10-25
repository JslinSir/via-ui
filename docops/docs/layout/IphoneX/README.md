### via-iphonex-bottom-safe 底部适配  
   用于 iPhone x 系列底部 安全区域适配


### 示例代码
* 基本使用
```
  <view class="fixed-bottom">
        <view>以上是底部安全范围</view>
        <via-iphonex-bottom-safe />
    </view>
```
*  slot包裹 用法
```
 <view class="fixed-bottom">
        <via-iphonex-bottom-safe>
            <view class="bottom-center">
                <view>以上是底部安全范围</view>
            </view>
        </via-iphonex-bottom-safe>
    </view>
```
  自定义底部颜色
```
 <view class="fixed-bottom">
        <view>以上是底部安全范围</view>
        <via-iphonex-bottom-safe bg="rgba(10,29,102,0.1)" />
    </view>
```
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| bg | 底部安全区域颜色 | '' |  |   |
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
 
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
 

### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
 



