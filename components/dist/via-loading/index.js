
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading:{
      type:Boolean,
      value:true
    },
    size:{
      type:Number,
      value:28
    },
    lightColor:{ //高亮色
      type:String,
      value:'#343c5c'
    },
    bgColor:{ //圆的背景色
      type:String,
      value:'#cccccc'
    },
    duration:{
      type:Number,
      value:0.6
    },
    type:{
      type:String,
      value:'default'
    }
  },
  
  attached(){
    
  },

  methods: {
    showLoading(){
       this.setData({loading:true})
    },
    hideLoading(){
      this.setData({loading:false},()=>{
        this.triggerEvent("onClose", '');
      })
   }
  }
})

