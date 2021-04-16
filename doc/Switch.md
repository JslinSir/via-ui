### via-switch  开关切换
    开关切换组件


### 示例代码
* 基本使用
```
<via-switch selectData="{{selectData}}" />
```
* 自定义大小
```
<via-switch selectData="{{selectData}}" activeColor="yellow" width="200" height="120" radioSize="120"/>
```
* info 类型
```
<via-switch selectData="{{selectData}}" type="info" />
```
* info 类型 设置背景色 字体大小宽度 圆角
```
<via-switch 
		selectData="{{selectData}}"
		width="180"
		height="80"
		fontSize="30"
        fontColor="#323232"
		activeColor="#fff"
        bgColor="#fafafa"
		radius="80"
		boxRadius="80"
		type="info" />
```


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| selectData | 数据源 | Array | [ ] | [{ name: '开启', id: '1' }, { name: '不开启', id: '0' }], |
| curentId | 当前选中的id | String | '' | |
| type | 开关类型 | String| default | default info |
| radio | 开关选中状态 | Boolean | true | | 
| fontSize | 字体大小 | Number | 28 rpx | | 
| fontColor | 字体颜色 | String | #323232 | | 
| radius | 圆角 | Number | 10  rpx| | 
| bgColor | 背景色 | String | #f6f6f6 | | 
| activeColor | 选中色 | String | #04BE02 | | 
| radioSize | 开关radio大小 | Number | 56 rpx | | 
| width | 宽 | Number | 120 rpx | | 
| height | 高 | Number | 60 rpx | | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-radio-style | 开关圆环样式  | -  |
| class-radio-select-style | 开关选中圆环样式  | -  |


### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| -  | -  | -  |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange | 开关状态改变触发 | boolean Object | 如果是默认类型返回 布尔类型否则，返回当期选中的 item  |



