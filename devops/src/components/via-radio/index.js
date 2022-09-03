 import { RadioDefaultProps } from './props'
Component({
  
  properties: RadioDefaultProps,
 
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
