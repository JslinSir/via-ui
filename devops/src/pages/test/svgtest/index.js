 
import { getSvg } from '../../../components/svgs/index'

Page({
  
  data:{
   svg:''
  },

  onLoad: function (options) {
    this.setData({svg: getSvg('waringIcon','#d81e06')})
  },
 
})