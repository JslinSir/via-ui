
Component({
  options: {
    multipleSlots: true
  },

  externalClasses: ["class-container", "class-header", "class-content"],

  /**
   * 组件的属性列表
   */
  properties: {
    // 圆角
    radius: {
      type: Number,
      value: 20
    },

    // 不显示头部下方边框，默认显示
    disHeaderBorder: {
      type: Boolean,
      value: false
    },

    // 不显示卡片头部，默认展示
    disHeader: {
      type: Boolean,
      value: false
    },

    // 卡片标题
    title: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
});