###  吐司 Toast 
  轻提示组件


### 示例代码
* 基本使用
  
```
wxml：
<via-toast id="toast" />
js：
this.selectComponent('#toast').toast('Via UI')
this.selectComponent('#toast').success('感谢使用！')
this.selectComponent('#toast').error('提交失败')
this.selectComponent('#toast').loading('加载中')
```

 

### 属性
| 属性 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| opacity | 不透明度 | Number | 0 | |
| toastSrc | 自定义icon路径 | Strin | '' | |
| loadingType | loading样式 | Strin | 'default' | default，move 两种 | |

 
 

### 外部样式类
| 类名 | 说明 | 备注 | 
| --- | --- | --- |
| - | - | - |
 

### 插槽
| 名称 | 说明 | 备注 |
| --- | --- | --- |
| - | 自定义内容样式 | -- |
 


### 事件
| 名称 | 说明 | 返回值 | 备注 |
| --- | --- | --- | --- |
| |  |  |  | |
  

