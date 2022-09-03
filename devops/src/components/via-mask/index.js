import { MaskDefaultProps } from './props'
Component({
  /**
   * 组件的属性列表
   */
  properties: MaskDefaultProps,

  data: {

  },


  methods: {

    show() {
      this.setData({ visible: true })
    },
    hide() {
      this.setData({ visible: false })
       this.triggerEvent('onClose','')//关闭时触发
    },

    forbidMove() {
      // forbid move 
    },

    handleClose() {
      this.data.clickClose &&  this.setData({visible:false},()=>{
        this.triggerEvent('onClose','')
      })
       this.triggerEvent('onClickClose','') //点击时触发
    },


  }
})
