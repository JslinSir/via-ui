### 选项卡 Tab  
  选项卡切换组件


### 示例代码
* 基本使用
  
```
<via-tab tabs="{{tabs1}}" selectColor="#0188FF"/>
```

* 设置选中的tab activeTab 1
 
```
<via-tab
	tabs="{{tabs1}}"
	selectColor="#333"
    activeTab="1"
	class-line="bottom-line"
	bind:onChange="handleChange"
	/>
```

 
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| tabs | tab数据源 | Array | [ ] | {title,key} |
| selectColor | 选中色 | String | '' |   |
| activeTab | 当前激活Tab索引 | Number| 0 |  | |
 

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
 
### 说明
 `每个 tab item 最小宽度150 rpx，超过5个可滑动`

