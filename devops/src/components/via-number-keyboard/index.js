/**
 * 数字键盘
 */
import { NumberKeyboardDefaultProps } from './props'
import {
  runAnimotionFrame,
} from '../utils/animate'
import * as frameConfig from '../utils/animateConfig'
Component({
  /**
   * 组件的属性列表
   */
  properties: NumberKeyboardDefaultProps,
  data:{
    status:false,
    keyboardConfig:[]
  },
  lifetimes:{
    attached(){
     
    },
  },
  methods:{
    async show(){

      if(this.data.status == true){

        return this.data.status

      }
      this.setData({status:true},async()=>{
        await runAnimotionFrame(this, '#keyboard', frameConfig.bottomFrame.show,300)
      })
     
      
     },

     async hide(){

        if(!this.data.status){

          return this.data.status

        }
        await runAnimotionFrame(this, '#keyboard', frameConfig.bottomFrame.hide,300)

        this.setData({status:false})
     
       this.triggerEvent('onClose',)
       
     },

     handleKeyboardClick(e){
      this.properties.vibrate && wx.vibrateShort()
      const { dataset :{ v } } = e.currentTarget
       this.triggerEvent('onInput',v)

     },

     handleClear(){
      this.properties.vibrate && wx.vibrateShort()
       this.triggerEvent('onDelete')
     },

     handleConfirm(){
       this.properties.vibrate && wx.vibrateShort()
       this.triggerEvent('onConfirm','')
     },

  
  }
})
