export const CalendarDefaultProps = {

  type: { //选择方式 单选 single 多选: multiple 区间 range
    type: String,
    value: 'multiple'
  },
  startDate: {
    type: String,
    value: ''
  },
  endDate: {
    type: String,
    value: ''
  },
  date: { //YYYY-MM-DD
    type: Array,
    value: [],
  },
  height: {
    type: Number,
    value: 1100
  },
  cancelColor: {
    type: String,
    value: '#333'
  },
  confirmColor: {
    type: String,
    value: '#0a1d66'
  },
  clickConfirmAutoClose: { //点击确定 是否自动关闭 弹窗
    type: Boolean,
    value: true
  },
  maskClose: {
    type: Boolean,
    value: true
  },

}