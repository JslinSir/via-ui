/**
 * 数字键盘
 */
import {
  runAnimotionFrame,
  clearAnimotion
} from '../utils/animate'
import * as frameConfig from '../utils/animateConfig'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'数字键盘'
    },
    // 键盘 确认按钮文案，为null,则不显示确认按钮
    confirmText:{
      type:String,
      value:null
    },
    //是否开启小数点
    float:{
      type:Boolean,
      value:false
    },
   //是否开启震动 
    vibrate:{
      type:Boolean,
      value:true
    },
     //确认按钮颜色
     confirmBg:{
      type:String,
      value:'#0a1d66'
    },
    // 确认按钮loading状态
    confirmLoading:{
      type:Boolean,
      value:false
    },
    // 确认按钮禁用状态
    configmDisabled:{
      type:Boolean,
      value:false
    },
  },
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
      if(this.status == true){

        return this.status

      }
      await runAnimotionFrame(this, '#keyboard', frameConfig.bottomFrame.show,300)

      this.status = true
      
     },

     async hide(){

        if(!this.status){

          return this.status

        }

       await runAnimotionFrame(this, '#keyboard', frameConfig.bottomFrame.hide,300)

       this.status = false
     
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
