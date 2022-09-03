export const ActionSheetDefaultProps = {
  // 点击周边 mask 是否关闭窗口, 默认支持
  maskClose: {
    type: Boolean,
    value: true
  },
  actionStatus: {
    type: Boolean,
    value: false
  },
  zIndex: {
    type: Number,
    value: 2
  },
  title: {
    type: String,
    value: ''
  },
  cancelText: {
    type: String,
    value: '取消'
  },
  cancelTextSize: {
    type: Number,
    value: 32
  },
  cancelTextColor: {
    type: String,
    value: '#323232'
  },
  lineHeight: {
    type: Number,
    value: 100
  },
  textSize: {
    type: Number,
    value: 32
  },
  textColor: {
    type: String,
    value: '#323232'
  },
  actionData: { //{name}  键值 有name ,其他值自定义，想要回传的键值
    type: Array,
    value: []
  }
}