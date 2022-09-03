export const PopModalDefaultProps = {
  title: String,
  // 点击周边 mask 是否关闭窗口, 默认支持
  maskClose: {
    type: Boolean,
    value: true
  },
  height: {
    type: Number,
    value: 750
  },
  hasCloseIcon: {
    type: Boolean,
    value: true
  },
  direction: {
    type: String,
    value: 'bottom'
  },
  confirm: {
    type: Boolean,
    value: false
  },
  cancelTex: {
    type: String,
    value: '取消'
  },
  confirmTex: {
    type: String,
    value: '确认'
  },
  texSize: {
    type: Number,
    value: 32
  },
  cancelColor: {
    type: String,
    value: '#333'
  },
  confirmColor: {
    type: String,
    value: '#0a1d66'
  },
  confirmDisabled: {
    type: Boolean,
    value: false
  },
}