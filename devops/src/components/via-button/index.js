
Component({
  externalClasses: ["class-button", "class-button-disabled"],
  properties: {
    text: { //文案
      type: String,
      value: ''
    },
    loading: { //是否加载
      type: Boolean,
      value: false,
    },
    loadingText:{//loading 加载文案
      type: String,
      value: ''
    },
    disabled: { //是否禁用
      type: Boolean,
      value: false,
    },
    touchOpacity: {//按钮点击的不透明度
      type: Number,
      value: 0.6,
    },

    textSize: {//文案 大小
      type: Number,
      value: 32,
    },
    textColor:{ //文案颜色
      type: String,
      value: ''
    },

    width: { //按钮宽度
      type: Number,
      value: 0,
    },

    height: {// 按钮高度
      type: Number,
      value: 88,
    },
    
    radius: { //按钮 圆角
      type: Number,
      value: 44,
    },

    btnColor:{ //按钮背景色
      type: String,
      value: '#0a1d66'
    },

    styleName: { //按钮样式的字符串形式
      type: String,
      value: ''
    },

    iconName:{ //按钮图标名称
      type: String,
      value: ''
    },

    iconSize: { //按钮图标大小
      type: Number,
      value: 28,
    },
    iconColor: { //按钮图标颜色
      type: String,
      value: '#fff'
    },
    iconSrc:{ //图标地址
      type: String,
      value: ''
    },


  },

  /**
   * 组件的初始数据
   */
  data: {
    status: 'normal'
  },

  observers: {
    disabled() {
      this.btnStatusChange()
    },
    loading() {
      this.btnStatusChange()
    },
    with(w) {
      if (w.includes('%')) {
        this.setData({ with: w })
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    btnStatusChange() {
      const { loading, disabled, touchOpacity, } = this.properties
      if (loading) {
        this.setData({ status: 'loading', touchOpacity: 1 })
      } else if (disabled) {
        this.setData({ status: 'disabled', touchOpacity: 1 })
      } else {
        this.setData({ status: 'normal', touchOpacity })
      }


    },

    handleBtnClick(e) {
      const { status } = this.data
      if (status === 'normal') {
        this.triggerEvent('onClick',e)
      }
    }

  }
})
