// 动画映射关系
const _in = 'via-fade-in'
const config = {
  fadein:`${_in}`, /* 渐出 */
  fadeinFromBottom:`${_in}-from-bottom`,/* 从底部渐入 */
  fadeinFromTop:`${_in}-from-top`, /* 从顶部渐入 */
  fadeinFromLeft:`${_in}-from-left`, /* 从左边渐入 */
  fadeinFromRight:`${_in}-from-right`, /* 从右边渐入 */
  fadeinScale:`${_in}-scale`,/* 缩放渐入 */
  fadeinSwingY:`${_in}-swing-y`,/* 上下摆动渐入 */
  fadeinSwingX:`${_in}-swing-x `,/* 左右摆动渐入 */
  rotate90:'via-rotate-90',/* 旋转 90度 */
  rotate180:'via-rotate-180', /* 旋转 180度 */
  rotate360:'via-rotate-360',/* 旋转 360度 */
  shake:"via-shake", /* 抖动 */
  jello:'via-jello',/* 果冻抖动 */
 

}

// 过度动画
Component({
  properties: {
    // 过度名称
    name:{
      type:String,
      value:'fadein'
    },
    // 过度时间·
    duration:{
      type:Number,
      value:0.3
    },
    // 过度动画
    timingFunction:{
      type:String,
      value:'ease-in-out'
    },
    // 动画执行次数
    iterationCount:{
      type:Number,
      value:1
    },
    
  },
  data: {
    config
  },

  methods: {

  },
});