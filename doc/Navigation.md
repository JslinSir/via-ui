### via-navigation  顶部导航
  顶部导航组件


### 示例代码
* 基本使用
  
```
<via-navigation  title="导航"  />

```

* 开启提示 保存到收藏栏
  
```
<via-navigation  title="导航"  tip/>

```

* 开启提示 保存到收藏栏 是否自动关闭 tipsAutoDisTime = 0 不开启，tipsAutoDisTime = 10 10s后自动关闭
  
```
<via-navigation  title="导航" tipsAutoDisTime="10"  tip/>

```
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| showIcon | 是否展示Icon | Boolean | true | |
| iconSrc | iconSrc自定义路径 | String | '' | 如果为空使用默认 |
| iconSize | icon尺寸 | Number | 36  rpx|    |
| iconColor | 图标颜色 | String | #323232 | | 
| bg | 导航背景 | String | #fff | | 
| round | 回到首页是否开启圆环样式 | Boolean | true | | 
| placeholder | 是否开启占用高度 | Boolean | true | | 
| title | 导航标题 | String | '' | | 
| titleColor | 导航标题颜色 | String | '#323232' | | 
| titleSize | 导航标题大小 | Number | 32 rpx | | 
| tip | 是否开启顶部收藏提示 | Boolean | false | | 
| tipsText | 提示文案 | String | '微信首页下拉可快速找到我' | | 
| opacity | 导航透明度 | Number | 1 |  0 - 1| 
| tipsAutoDisTime | 自动关闭提示倒计时 | Number | 1 |  0 - 1| 
| opacity | 导航透明度 | Number | 0 |  0:表示手动关闭，大于0 表示在这个时间段自动关闭| 
| homeRoute | 回到首页地址 | String | '' | 首页路径 如果存在会回到首页，否则触发回到首页的监听| 
| triggerBack | 是否开启回退监听 | Boolean | false | 如果开启直接回退，否则，触发监听手动回退| 
 
 

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
| onBack | 导航回退监听 | ''  | 需要开启 triggerBack |
| onBackHome | 回到首页监听 | ''  | 如果 homeRoute 为空触发|
 

### 组件内部方法
| 名称 | 说明 | 入参 | 返回值 | 备注 |
| --- | --- | --- |--- |--- |
| setScrollTop | 设置导航渐变 | scrollTop：滚动高度， distance：渐变开始高度| ''  | |
| getNavData | 获取导航的占位信息 | ''  | promise:导航的节点信息  | | |
 
