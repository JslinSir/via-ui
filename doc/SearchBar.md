### via-searchBar 搜索条
   搜索组件


### 示例代码
* 基本使用
```
<via-searchBar />
```

* 禁用
```
<via-searchBar  placeholder="请输入会员名称"  disabled/>
```

* 搜索词滚动
```
<via-searchBar  searchText="" carousel carouselText="{{carouselText}}"/>
```

* 自定义
```
 <via-cell leftIconName="my" rightText="查看更多" rightIconName="right">我的</via-cell>
```

* 自定义 
```
<via-searchBar placeholder="请输入" value="{{value}}" width="400" searchText="取消" bind:onChange="handleChange"/>
```
 
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| radius | 圆角 | Number | 40 rpx |   |
| height | 高度 | Number | 88 rpx |   |
| width | 宽度 | Number |  - | - |
| leftText | 左边文案 | String | '' | |
| showSearchIcon | 是否展示搜索icon | Boolean | true |  |
| searchText | 展示右边搜索文案  | String | 搜索 |   |
| maxlength | 搜索词最大 字数 | Number | 140 | |
| placeholder | 默认提示文案 | String | '' | | 
| placeholderColor | 提示文案颜色 | String | #cccccc | |
| value | 搜索框值 | String | '' | | 
| focus | 是否自动聚焦 | Boolean | false | |
| showClear | 是否展示清除按钮 | Boolean | true | |
| disabled | 是否禁用 | Boolean | false | | 
| carousel | 是否开启搜索词滚动 | Boolean | false | |
| carouselText | 搜索词文案 | Array | [] | 前提是开启 carousel  | 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-search-text | 右侧搜索文案 外部样式 | -  |
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
| -| - |- |
 

### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onChange| 搜索词改变时触发 | - | -   |
| onCancel| 取消时触发 | - | -   |
| onConfirm| 键盘确定搜索时触发 | - | -   |
| onClickSearchText| 点击右侧文案时触发 | - | -   |


