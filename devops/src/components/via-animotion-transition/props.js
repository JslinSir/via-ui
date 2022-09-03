export const AnimotionTransitionDefaultProps = {
  // 过度名称
  name: {
    type: String,
    value: 'fadein'
  },
  // 过度时间·
  duration: {
    type: Number,
    value: 0.3
  },
  // 过度动画
  timingFunction: {
    type: String,
    value: 'ease-in-out'
  },
  // 动画执行次数
  iterationCount: {
    type: Number,
    value: 1
  },
}