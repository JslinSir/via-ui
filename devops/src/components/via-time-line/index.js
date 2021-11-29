const {
  getRect
} = require('../utils/noderef')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    current: { // 指定当前节点  从 0  开始记数
      type: Number,
      value: 0,
    },
    dataSource: {
      type: Array,
      value: [],
    },
    color:{
      type: String,
      value: '#dadada', 
    },
    activeColor:{
      type: String,
      value: '#FF574C',
    },
    activeBorderColor:{  //小程序的  border-color 不支持rgba 
      type: String,
      value: '#FFDAD7',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    lineHeight: 0,
    activeLineHeight: 0
  },
  observers: {
    dataSource(data) {
      if (Array.isArray(data)) {
        this.getAllRef()
      }
    },
  },



  /**
   * 组件的方法列表
   */
  methods: {

    async getAllRef() {
      const {  current } = this.properties
      const result = await getRect(this, '.title', true)
      if (result) {
        const len = result.length
        const lastTop = result[len - 1].top
        const firstTop = result[0].top
        const curentTop = result[current].top
        this.setData({
          lineHeight: lastTop - firstTop,
          activeLineHeight: curentTop - firstTop
        })

      }

    }



  }
})
