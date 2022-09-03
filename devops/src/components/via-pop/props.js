export const PopDefaultProps = {
  // 点击周边 mask 是否关闭窗口, 默认支持
  maskClose: {
    type: Boolean,
    value: true
  },
  // 是否有遮罩
  hasMask: {
    type: Boolean,
    value: true
  },
  // bottom top center,left right
  direction: {
    type: String,
    value: 'bottom'
  },
  zIndex: {
    type: Number,
    value: 10
  }
}