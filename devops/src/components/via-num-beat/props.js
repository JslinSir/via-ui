export const NumBeatDefaultProps = {
  nums: {
    type: Number,
    value: 0,
    observer: "setNums"
  },

  rate: {//跳动毫秒的频率
    type: Number,
    value: 80,
  },
  total: { //跳动发生总次数
    type: Number,
    value: 8,
  },
  startNum: { //开始跳动的数字，如果大于等于10 执行跳动
    type: Number,
    value: 10,
  }
}