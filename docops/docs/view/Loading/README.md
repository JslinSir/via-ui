### 加载 Loading  
  加载指示器


### 示例代码
* 基本使用
```
<via-loading/>
```
* 高亮
```
<via-loading type="light" />
```
* 自定义
```
<via-loading  type="light" bgColor="#ccc" lightColor="red" size="30"/>
```
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| loading | 加载状态 | Boolean | true |  |
| size | 加载尺寸 | Number | 28 | |
| lightColor | 加载高亮色 | String| #343c5c | |
| bgColor | 加载的背景色 | String | #cccccc| |
| duration | 动画加载时长 | Number | 0.6 |  |
| type | 加载类型 | String | default |  default light 如果为light 则高亮显示否则 默认纯色显示  |


### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| --- | --- | --- |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| --- | --- | --- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClose| loading 状态为false的时候触发 | - |  | |



