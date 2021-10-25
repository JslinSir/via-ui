Component({
  options: {
    virtualHost: true
  },
  properties: {
    opacity:{
      type:Number,
      value:0.6
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
    handleClick(){
      this.triggerEvent('onClick')
    }
  }
})