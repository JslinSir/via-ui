### via-carouselText  文字跑马灯
   文字跑马灯组件，用于消息过长提示


### 示例代码
* 基本使用
```
<via-carouselText speed="3" text="恭喜你获得了VIP权利，尊享VIP权利"/>
```
* 竖向滚动
```
 <via-carouselText speed="3" text="{{text}}" direction="column"/>
```
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 | 
| --- | --- | --- | --- | --- |
| speed | 滑动速度 | Number | 3 | - |
| direction | 滚动方向 | String | row | row  column |
| height | 高度 | Number | 60 | - |
| text | 文案 | String Array | '' | - |
 

 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-scroll-text | 滚动文案样式 | -  |
| class-swiper-container | 滚动容器样式 | -  |
| class-hot-item | 竖向滚动 每个分组样式 | -  |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
 | -| - | - |  


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| -| - | - | -   |



