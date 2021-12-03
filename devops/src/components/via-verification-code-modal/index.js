/**
 * 验证码弹窗业务组件
 */
 
 
import { createArray } from '../utils/base'

Component({
  behaviors: [],
  properties: {
    // 倒计时时长 单位 s 默认 60
    time: {
      type: Number,
      value: 60
    },
    title: {
      type: String,
      value: '请填写手机短信验证码'
    },
    phone: {
      type: String,
      value: ''
    },
    // 验证码长度,默认6位
    msglen:{
      type: Number | String,
      value: 6
    },
  },
  data: {
    status: false,
    codes: [],
    codesLengthArray:createArray(6)
  },

  observers:{
    msglen(len){
      if(len){
       const codesLengthArray = createArray(Number(len))
       this.setData({codesLengthArray})
      } 
    }
  },

  lifetimes: {
    created() {

    },
    attached() {
      this.$modal = this.selectComponent('#pop-modal')
    },
    moved() {

    },
    detached() {
      // 清除倒计时
      clearInterval(this._interval)
 
    },
  },
  methods: {

    show() {
     
      this.$modal.show()
      this.setData({ status: true,value:'',codes:[] })
       // 开始倒计时
       this.runCutdown()
     
    },


    hide() {
      clearInterval(this._interval)
      this.$modal.hide()
      this.setData({
        status: false
      })
    },


    runCutdown() {
      const { time } = this.properties
      let initTime = time-1
      this.setData({curentTime:initTime})
      this._interval = setInterval(() => {
        const {  curentTime  } = this.data
         if (curentTime === 0 ) {
          clearInterval(this._interval)
          return
        }
        this.setData({
          curentTime: --initTime
        })
      }, 1000)

    },

    /**
     * 重新获取验证码
     */
    handleRequestCodeAgin() {
      clearInterval(this._interval)
      this.setData({curentTime:null})
      this.triggerEvent('onReFresh')
    },


  

    handleInput(e) {
      const {
        value
      } = e.detail
      this.setData({
        codes: value.split('')
      },()=>{
        if(value.length === this.properties.msglen){
          this.triggerEvent('onRightInput',value)
        }
      
      })
  


    },

    /**
     * 关闭短信弹窗modal
     */
    handleCloseCodeModal() {
      // 校验有没有输入验证码
      const { codes } = this.data
      if(!codes || codes.length!=this.properties.msglen){
        wx.showToast({
          title: `请输入${this.properties.msglen}位验证码`,
          icon:'none'
        })
        return 

      }
       this.triggerEvent('onClose','')
      this.hide()
 
    },
  },
});