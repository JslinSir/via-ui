Component({
  externalClasses: ["class-pop-bottom-view", "class-pop-center-view", "class-header-title"],
  options: {
    multipleSlots: true
  },
  properties: {
    title: String,
    // 点击周边 mask 是否关闭窗口, 默认支持
    maskClose: {
      type: Boolean,
      value: true
    },
    height:{
      type: Number,
      value: 750
    },
    hasCloseIcon: {
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'bottom'
    },
    confirm: {
      type: Boolean,
      value: false
    },
    cancelTex: {
      type: String,
      value: '取消'
    },
    confirmTex: {
      type: String,
      value: '确认'
    },
    texSize: {
      type: Number,
      value: 32
    },
    cancelColor: {
      type: String,
      value: '#333'
    },
    confirmColor: {
      type: String,
      value: '#1976D2'
    },
  },
  data: {

  },
  created() {
    this.$pop = this.selectComponent('#popid')
  },

  methods: {
    show() {
      this.$pop.show()
    },
    hide() {
      this.triggerEvent('onClose', '')
      this.$pop.close()
    },
    handleConfirm() {
      this.triggerEvent('onConfirm', '')
    },
  },
});