### 折叠面板 Collapse  折叠面板
  折叠面板 组件


### 示例代码
* 基本使用
  
```
	<via-collapse title="优惠券规则">
			<view slot="content">
				<view>1.满100立减5元</view>
				<view>2.满200立减10元</view>
				<view>3.满300立减20元</view>
			</view>
		</via-collapse>

```

* 默认展开
  
```
	<via-collapse title="优惠券规则" open>
			<view slot="content">
				<view>1.满100立减5元</view>
				<view>2.满200立减10元</view>
				<view>3.满300立减20元</view>
			</view>
		</via-collapse>
```

* 自定义插槽
  
```
	<via-collapse title="促销活动说明：只是用于后海门店活动时间：2020-10-24">
			<view slot="content" class="self-content">
				<view>1.满100立减5元</view>
				<view>2.满200立减10元</view>
				<view>3.满300立减20元</view>
			</view>
		</via-collapse>
```
 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| title | 折叠面板标题 | String | '' | 错过一行自动截取... |
| content | 面板内容 | String | '' | |
| open | 面板是否展开 | Boolean | false  | ||
 
 
 

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-collapse-head | 面板头部外部样式 | - |
| class-collapse-head-title | 面板标题外部样式 | - |

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| content  | 面板内容自定义插槽 |   - |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
|  |  |  |  | |
 
  
