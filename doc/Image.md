### via-image  图片
  一个支持懒加载，以及加载失败默认图的图片组件


### 示例代码
* 基本使用
```
<via-image  src="http://xx"  />
```
* 懒加载，带 懒加载默认图
```
<via-image  lazyLoad  loadingImg="http://xx" src="http://xx"/>
```
* 开启预览
```
<via-image   preView   src="http://xx" />
```
 


### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| style | 样式 | String | `''` |  |
| src | 图片地址 | String | '' | |
| mode | 同 官网 mode | String | scaleToFill | |
| webp | 同 官网 webp | Boolean | false | |
| lazyLoad | 是否开启懒加载 | Boolean | false |  |
| showMenuByLongpress | 同 官网  | Boolean | false |   |
| errorImg | 错误填充图 | String | imgError | |
| loadingImg | 加载中填充图 | String | '' | | |
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| class-image | 图片外部样式类名 | -  |
 



### 插槽
| 名称 | 说明 | 备注 |
| --- | --- |--- |
| - | - | -  |


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| onError| 图片加载失败触发 | - | -   |
| onSuccess| 图片加载成功触发 | - |  -  |


