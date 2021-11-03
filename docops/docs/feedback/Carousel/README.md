### 轮播图 Carousel 
   轮播跑马灯组件


### 示例代码
* 基本使用
  
```
<via-carousel-view swiperItemNums="{{swiperList.length}}"  >
	<via-carousel-item wx:for="{{swiperList}}" wx:key="unique">
		<view class="swiper-card">
      {{index}}
		</view>
	</via-carousel-item>
</via-carousel-view>
```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| swiperItemNums | 滑块的个数 | Number | 0 | |
| swiperItemWidth | 滑块宽度  | Number | 470 | rpx 单位 |
| leftX | 距离左边水平距离 | Number | 140 | rpx  单位|
 
 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| slot | 自定义渲染卡片 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange | 轮播改变时间 | curIndex | 当前选中轮播下标 | |
  
### 说明
 
