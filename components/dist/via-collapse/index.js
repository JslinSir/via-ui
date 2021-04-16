
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
    status:'show'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggleOpen(){
      const { open } = this.data
      this.setData({open:!open})
      if(!open){
        this.setData({status:open!=true?'show':'hide'},()=>{
          this.setData({open:!open})
        })
      }else{
        this.setData({status:open!=true?'show':'hide'},()=>{
          setTimeout(()=>{
            this.setData({open:!open})
          },200)
        })
       
      }
    
      
    },
  }
})