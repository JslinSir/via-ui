
import LoadingSvg from '../svgs/loading.svg'
import { LoaidngDefaultProps } from './props'
Component({
  /**
   * 组件的属性列表
   */
  properties: LoaidngDefaultProps,
  
  attached(){
    this.setData({LoadingSvg:LoadingSvg(this.properties.bgColor)})
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

