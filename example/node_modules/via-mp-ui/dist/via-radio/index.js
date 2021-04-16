 
Component({
  
  properties: {
    radioSize:{
      type:Number,
      value:40
    },
    action:{
      type:Boolean,
      value:false
    },
    actionColor:{
      type:String,
      value:'#1976D2'
    }
  },
 
  data: {

  },

 
  methods: {
    handleClick(){
      const { action } = this.data
      this.setData({action:!action},()=>{
        this.triggerEvent("onClick",!action)
      })
    },
  }
})
