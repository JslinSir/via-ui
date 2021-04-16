Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loadingText:{
      type:String,
      value:'加载中...'
    },
    loading:{
      type:Boolean,
      value:true
    },
    noMore:{
      type:Boolean,
      value:false
    },
    noMoreText:{
      type:String,
      value:'没有更多啦~'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
})