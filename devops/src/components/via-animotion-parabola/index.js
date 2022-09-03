/**
 * 抛物线动画
 * 实现原理：两个块，垂直抛物线移动的 小球包裹在 水平移动的块中
 */
import { AnimotionParabolaDefaultProps } from './props'
// 抛物线动画  
import {
  runAnimotionFrame,
  clearAnimotion
} from '../utils/animate'

// 抛物线的贝塞尔 曲线
const _BEZIER_LINE = 'cubic-bezier(0,-0.54,1,.3)'

// 距离所需要的动画时长 
const TIME_RATE = 0.0012


Component({
  properties: AnimotionParabolaDefaultProps,
  data: {
    styleX: '',
    styleY: '',
    status: true
  },
  ready() {

  },
  methods: {

    //  动画执行
    async run(startRef, endRef) {

      const translateX = endRef.x - startRef.x // X 轴移动距离
      const translateY = endRef.y - startRef.y // Y 轴移动距离 
      const time = this.cacuTimeByDistans(translateY) //计算动画时长
  
      this.setData({
        status: true
      },async()=>{
        if (startRef && endRef) {

          await Promise.all([this.runAnimotionFrameX(startRef, translateX, time), this.runAnimotionFrameY(startRef, translateY, time)])
  
          // 清除动画
          this.clearAnimotionParabola()
  
  
        }
      })
    
    },

    /**
     * 横向移动动画
     */
    runAnimotionFrameX(startRef, translateX, time) {

      runAnimotionFrame(this, '#ball-box', [{
          left: `${startRef.x}px`,
          top: `${startRef.y}px`,
          opacity: 1,
          ease: 'linear'
        },

        {
          translateX: `${translateX}px`,
          ease: 'linear'
        },

      ], time)

    },

    /**
     * 竖向移动动画
     */
    runAnimotionFrameY(startRef, translateY, time) {

      return runAnimotionFrame(this, '#ball', [{

          ease: _BEZIER_LINE
        },

        {
          translateY: `${translateY}px`,
          ease: _BEZIER_LINE
        },

      ], time)
    },




    /**
     * 清除动画
     */
    async clearAnimotionParabola() {

      await clearAnimotion(this, '#ball-box', { opacity: true, })
      this.setData({status:false})

    },

    /**
     * 根据移动的距离计算，动画时长
     * 
     */
    cacuTimeByDistans(translateY) {
      //TODO: 计算出抛物线执行时间
      const reate = TIME_RATE

      return Math.ceil(Math.sqrt(translateY / reate))
    },

  },
});