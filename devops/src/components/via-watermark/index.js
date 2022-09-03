/**
 * 简单的水印组件
 */
import { WatermarkDefaultProps } from './props'
import {
  getFields
} from '../utils/noderef'
import {
  rpxToPx
} from '../utils/base'

Component({
  properties: WatermarkDefaultProps,

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached() {
      this.drawWhaterMark()
    }
  },



  /**
   * 组件的方法列表
   */
  methods: {
    async drawWhaterMark() {
      const res = await getFields(this, '#whater-marker-cavas', {
        node: true,
        size: true,
      })

      const {
        markStr,
        fontSize,
        spaceWidth,
        spaceHeight
      } = this.properties
      const canvas = res[0].node
      const dpr = wx.getSystemInfoSync().pixelRatio
      // 字体属性
      const _fontSize = rpxToPx(fontSize) * dpr

      const _fontAtr = `normal ${_fontSize}px sans-serif`
      // 长度截取
      const _markStr = markStr.substring(0, 8)
      const width = res[0].width
      const height = res[0].height
      canvas.width = width * dpr
      canvas.height = height * dpr

      // 获取实例
      const ctx = canvas.getContext('2d')

      //设置文字的旋转角度，角度为45°； 
      ctx.rotate(45 * Math.PI / 180)

      const _spaceHeight = rpxToPx(spaceHeight) * dpr

      const _spaceWidth = rpxToPx(spaceWidth) * dpr

      //对斜对角线以左部分进行文字的填充
      for (let j = 1; j < 20; j++) { //用for循环达到重复输出文字的效果，这个for循环代表纵向循环

        //文本 x坐标位置  y坐标位置 需要绘制的最大宽度
        this.darwText(ctx, _markStr, _fontAtr, 0, _spaceHeight * j)

        for (let i = 1; i < 20; i++) { //这个for循环代表横向循环，

          //文本 x坐标位置  y坐标位置 需要绘制的最大宽度
          this.darwText(ctx, _markStr, _fontAtr, _spaceWidth * i, _spaceHeight * j)


        }
      } //两个for循环的配合，使得文字充满斜对角线的左下部分

      //对斜对角线以右部分进行文字的填充逻辑同上
      for (let j = 0; j < 20; j++) {
        // 文本 x坐标位置  y坐标位置 需要绘制的最大宽度
        this.darwText(ctx, _markStr, _fontAtr, 0, -_spaceHeight * j)

        for (let i = 1; i < 20; i++) {
          //文本 x坐标位置  y坐标位置 需要绘制的最大宽度
          this.darwText(ctx, _markStr, _fontAtr, _spaceWidth * i, -_spaceHeight * j)
        }
      }
    },

    /**
     *  画水印
     * @param {*} ctx 
     * @param {*} text 
     * @param {*} _fontAtr 
     * @param {*} x 
     * @param {*} y 
     */
    darwText(ctx, text, _fontAtr, x, y) {
      ctx.beginPath();
      ctx.font = _fontAtr
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      //文本 x坐标位置  y坐标位置 需要绘制的最大宽度
      ctx.fillText(text, x, y);
    },
  }
})