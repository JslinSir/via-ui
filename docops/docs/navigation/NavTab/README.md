### 导航切换栏 NavTab  
  用于底部导航切换，或者导航类型的切换tab


### 示例代码
* 基本使用
  
```
<via-nav-tab tab="{{tabs}}"   />
```

* 带 红点
 
```
<via-nav-tab tab="{{tabs2}}" />
```
* 显示消息值
 
```
<via-nav-tab tab="{{tabs2}}"  />
```
 
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| tab | tab数据源 | Array | [ ] | 数据源格式：{name,  key, icon, iconSelect val} 如果设置红点类型，val为空即可， 如果显示消息类型，val 需填充 值 字符串类型  |
| isNav | 是否是底部导航类型 | Boolean| true |  | 
| height | 导航切换栏高 | Number| 100 rpx |  | 
| bgColor | 背景色 | String| rgba(255, 255, 255, 0.97) |  | 
| curentTab | 当前选中tab | Number| 0 |  | 
| animotion | 是否开启动画 | Boolean| true |  | 
| animotion | 是否开启动画 | Boolean| true |  | 
| iconSize | 图标大小 | Number| 48 rpx |  | 
| color | 默认图标颜色 | String| #999 |  | 
| activeColor | 选中色 | String| #343c5c |  | 
| fontSize | 底部字体尺寸 | Number | 20 rpx |  | 
| fontColor | 底部字体颜色 | String| #999 |  | 
| fontSelectColor | 选中字体样式 | String| #000 |  | |
### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-tab | tab 自定义外部样式 | - |
| class-active-tab | 当前选中 tab item 自定义外部样式 | - |
| class-line | 选中的底线 自定义外部样式 | - |

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| --- | --- | --- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange| tab切换时触发 |  |  | |
 
 

