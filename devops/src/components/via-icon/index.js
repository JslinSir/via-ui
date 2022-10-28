 import { IconDefaultProps } from './props'
 import { getSvg } from '../svgs/index'
Component({
  properties:IconDefaultProps,
  data:{
    svg:''
  },
  observers: {
    'name,color'() {
      this.iconsChange()
    },
  },
  methods:{
    iconsChange(){
      const { name,color } = this.properties
      name && this.setData({
        svg: getSvg(name,color)
      })
    },
  },
})

