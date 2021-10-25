
Component({
  externalClasses: ["class-collapse-head","class-collapse-head-title"],
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    content:{
      type:String,
      value:''
    },
    open:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggleOpen(){
      const { open } = this.data
      this.setData({open:!open},()=>{
        // this.animate('#content', [
        //   {  opacity: 0,   ease: 'linear' },
        //   {  opacity: 1,   ease: 'linear' },
        // ], 300, function () {
     
        // }.bind(this))
      })
    
    
  
    },
  }
})