import { TouchableOpacityDefaultProps } from './props'
Component({
  options: {
    virtualHost: true
  },
  properties: TouchableOpacityDefaultProps,

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      this.triggerEvent('onClick')
    }
  }
})