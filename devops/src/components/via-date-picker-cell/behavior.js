module.exports = Behavior({
  properties: {
    // 日期选择的类型
    mode: {
      type: String,
      value: 'date' //date: 日期 time:时间 dateTime:日期+时间
    },
    // 点击确定的时候自动关闭,设置false 不自动关闭可进行 值的校验
    autoClose: {
      type: Boolean,
      value: true
    },
    //选中的文案格式化字符
    dateTextFormatChart: {
      type: String,
      value: '-'
    },
    // 值文案格式化字符
    dateValFormatChart: {
      type: String,
      value: '-'
    },
    //选中的文案格式化字符
    timeTextFormatChart: {
      type: String,
      value: ':'
    },
    // 值文案格式化字符
    timeValFormatChart: {
      type: String,
      value: ':'
    },
    value: {
      type: Array,
      value: []
    },
    beginRange: { //日期开始选择的范围
      type: Number,
      value: 2,
    },
    endRange: { //日期结束选择的范围
      type: Number,
      value: 2,
    },
    maskClose: {
      type: Boolean,
      value: true
    },
    // 确认按钮颜色
    confirmColor: {
      type: String,
      value: '#0a1d66'
    },
    //重置按钮颜色
    resetColor: {
      type: String,
      value: '#323232'
    },
    // 标题文案颜色
    titleColor: {
      type: String,
      value: '#999999'
    },
    // 选中时间文案颜色
    activeColor: {
      type: String,
      value: '#0a1d66'
    },

    /**
     * 是否要补齐 0
     */
    isUnitZero: {
      type: Boolean,
      value: true,
    },
    //是否展示单位，文案,如：年月日，时分秒这些
    showUnitText: {
      type: Boolean,
      value: true,
    },

  },


  data: {
 
  },

  ready() {
    this.$pop = this.selectComponent('#pop-modal')
  },
  methods: {

  }
})
