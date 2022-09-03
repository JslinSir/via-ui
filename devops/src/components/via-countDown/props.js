export const CountdownDefaultProps = {
  startDate: {
    type: Number,
    value: 0
  },
  endDate: {
    type: Number,
    value: 0
  },
  date: {
    type: String,
    value: null
  },
  isShowDay: {
    type: Boolean,
    value: true
  },
  hu: {//小时的单位
    type: String,
    value: '时'
  },
  mu: {//分的单位
    type: String,
    value: '分'
  },
  su: {//秒的单位
    type: String,
    value: '秒'
  },
}