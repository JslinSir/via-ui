export const NavigationDefaultProps = {

  showIcon: { //是否展示icon
    type: Boolean,
    value: true
  },
  iconSrc: { // icon 自定义的路径，绝对路径
    type: String,
    value: ''
  },
  iconSize: { //icon 尺寸
    type: Number,
    value: 36
  },
  iconColor: { //icon 颜色
    type: String,
    value: '#323232'
  },
  bg: { //导航背景色
    type: String,
    value: '#fff' // 默认白色
  },
  round: { //回到首页是否开启圆环样式
    type: Boolean,
    value: true
  },
  // 默认占用高度
  placeholder: {
    type: Boolean,
    value: true
  },
  // 标题
  title: {
    type: String,
    value: ''
  },
  titleColor: {
    type: String,
    value: '#323232'
  },
  titleSize: {
    type: Number,
    value: 36
  },
  tip: {
    type: Boolean,
    value: false
  },
  tipsText: {
    type: String,
    value: '微信首页下拉可快速找到我'
  },
  opacity: {
    type: Number,
    value: 1
  },
  tipsAutoDisTime: {
    type: Number,
    value: 0
  },
  homeRoute: { // 首页路径 如果存在会回到首页，否则触发回到首页的监听
    type: String,
    value: ''
  },
  triggerBack: { //是否开启回退监听，如果开启直接回退，否则，触发监听手动回退
    type: Boolean,
    value: false
  },
}