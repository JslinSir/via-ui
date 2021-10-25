### 按钮 Button  
  操作按钮


### 示例代码
* 基本使用
```
 	<via-button>按钮</via-button>
    <via-button text="按钮"/>
```
* 加载
```
	<via-button loading>加载中...</via-button>
```
* 禁用
```
	<via-button disabled>按钮禁用</via-button>
```
* 	自定义 宽高，圆角，文字大小，loading
```
	<via-button
		 width="260"
		 height="80"
		 textSize="24"
         radius="10"
		 iconSize="20"
		 iconColor="red"
         loading
		>自定义大小按钮
		</via-button>
```
* 	自定义 图标
```
	<via-button  iconName="forward">自定义 图标按钮 </via-button>
```


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| text | 按钮文案 | String | `''` | 也支持slot形式 |
| loading | 加载状态 | Boolean | false | |
| disabled | 禁用状态 | Boolean | false | |
| touchOpacity | 按压态 | Number | 0.6 | |
| textSize | 按钮文案尺寸 | Number | 32rpx |  |
| textColor | 文案颜色 | String | '#fff' |  如果为空取默认值 |
| width | 宽度 | Number | 0 |  如果为0 默认值跟随父容器宽|
| height | 高度 | Number | 86rpx | |
| radius | 圆角 | Number | 44rpx |    |
| btnColor | 按钮背景色 | String | #343c5c | 如果为空取默认值 |
| styleName | 按钮样式的字符串形式 | String | '' | |
| iconName | 按钮图标名称 | String | '' | |
| iconSize | 按钮图标尺寸 | Number | 28 | |
| iconColor | 按钮图标颜色 | String | '#fff' | |
| iconSrc | 按钮图标远程地址 | String | '' | | |

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-button | 按钮外部样式类名 | 若类名下的样式不生效，建议加上 !import |
| class-button-disabled | 禁用状态下的类名 |  | |



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
| - | 按钮文案 | 自定义按钮名称 |


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onClick| 按钮点击事件 |  |  只有可点击状态小才会触发 loading disabled都不会触发  |



