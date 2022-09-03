export const LoaidngDefaultProps = {
  loading: {
    type: Boolean,
    value: true
  },
  size: {
    type: Number,
    value: 28
  },
  lightColor: { //高亮色
    type: String,
    value: '#0a1d66'
  },
  bgColor: { //圆的背景色
    type: String,
    value: '#dadada'
  },
  duration: {
    type: Number,
    value: 0.6
  },
  type: {//default light move
    type: String,
    value: 'default'
  },
  theme: { //如果样式为微信下拉刷新loading 两种主题 black,white
    type: String,
    value: 'black'
  },
}