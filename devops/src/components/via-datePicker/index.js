
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ["class-header-title"],
 
  properties: {
    title:String,
    value: {
      type: Array,
      value: []
    },
    beginRange:{ //日期开始选择的范围
      type: Number,
      value: 2,
    },
    endRange: {//日期结束选择的范围
      type: Number,
      value: 2,
    },
    maskClose: {
      type: Boolean,
      value: true
    },
    cancelTex: { 
      type: String,
      value: '取消'
    },
    confirmTex: { 
      type: String,
      value: '确认'
    },
    texSize:{
      type: Number,
      value: 32
    },
    cancelColor:{
      type: String,
      value: '#333'
    },
    confirmColor: { 
      type: String,
      value: '#0a1d66'
    },

    /**
     * 是否展示 年
     */
    isShowYearUnit: {
      type: Boolean,
      value: false,
    },

    /**
     * 是否要补齐 0
     */
    isUnitZero: {
      type: Boolean,
      value: false,
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    years: [],
    months: [],
    days: [],
    selectedValue: [],
    // 是否禁用
    forbidden: null,
 
  },
  observers: {
  
  },

  attached(){
    this.$popModal = this.selectComponent('#pop-modal')
  },
 
  methods: {

    show(){
      const years = []
      // 确认的参
      this.confimValue = []
      const date = new Date();
      const { beginRange, endRange } = this.data
      
      for (let i = date.getFullYear() - beginRange; i <= date.getFullYear() + endRange; i++) {
        years.push(i)
      }
      this.$popModal.show()
      this.setData({ years })
      this._setPickerData()
      this.pickerStatus = false
    },

    _setPickerData() {
      const date = new Date();
      const value = this.properties.value

      const year = value[0] ? parseInt(value[0]) : date.getFullYear()
      const month = value[1] ? parseInt(value[1]) : date.getMonth() + 1
      const day = value[2] ? parseInt(value[2]) : date.getDate()

      this.year = year
      this.month = month

      const months = this._setMonths(12)
      const days = this._setDays(year, month)

      const yearIndex = this.data.years.indexOf(year)
      const monthIndex = months.indexOf(month)
      const dayIndex = days.indexOf(day)
      this.confimValue = [year, month, day]
      
      this.setData({ months, days }, () => {
        this.setData({
          value: [year, month, day],
          selectedValue: [yearIndex, monthIndex, dayIndex]
        })
      })
    },

    /**
      * 创建月份
      */
    _setMonths(len) {
      const months = []
      for (let i = 1; i <= len; i++) {
        let month = 0;
        if (this.data.isUnitZero) {
          month = i < 10 ? '0' + i : i;
        }
        else {
          month = i;
        }
        months.push(month);
      }
      return months
    },
    _setDays(year, month) {
      const days = [];
      month = parseInt(month, 10);
      const date = new Date()
      let assignDate = new Date(year, month, 0)
      const maxDay = assignDate.getDate();
      for (let i = 1; i <= maxDay; i++) {
        let day = 0;
        if (this.data.isUnitZero) {
          day = i < 10 ? '0' + i : i;
        }
        else {
          day = i;
        }
        days.push(day);
      }
      return days;
    },
    dateChangeStart() {
      this.pickerStatus = true
      this.setData({ forbidden: 'forbidden' })
    },
    dateChangeEnd() {
      // 延迟
      setTimeout(() => {
        this.pickerStatus = false
        this.setData({ forbidden: null })
      }, 100)
    },
    /**
     * 年改变，月要滑到一月，天要重新计算该年该月多少天
     */
    dateChange(e) {
      const value = e.detail.value
      const year = this.data.years[value[0]] 
      let month = value[1] + 1 // 当前选中的月
      let day = value[2] + 1 // 当前选中的日
      if (this.year !== year) {
        month = 1
        day = 1
      }
      if (this.month !== month) {
        day = 1
      }
      this.setData({ value: [year, month, day] }, () => {
        this._setPickerData()
        const confimValue1 = this.confimValue[1] < 10 ? `0${this.confimValue[1]}` : this.confimValue[1]
        const confimValue2 = this.confimValue[2] < 10 ? `0${this.confimValue[2]}` : this.confimValue[2]
        this.triggerEvent('onChange', { value: [this.confimValue[0], confimValue1, confimValue2] })
      })
    },

    /**
     * 取消
     */
    handlePopClose() {
      this.triggerEvent('onClose')
    },
    /**
     * 确认按钮
     */
    handleConfirm(e) {
      if (this.pickerStatus === false) {
        const confimValue1 = this.confimValue[1] < 10 ? `0${this.confimValue[1]}` : this.confimValue[1]
        const confimValue2 = this.confimValue[2] < 10 ? `0${this.confimValue[2]}` : this.confimValue[2]
        this.$popModal.hide()
        this.resetDate()
        this.triggerEvent('onConfirm', { value: [this.confimValue[0], confimValue1, confimValue2] })
      
      }
    },
    //  重置
    resetDate(cb) {
      this.setData({
        years: [],
        months: [],
        days: [],
        selectedValue: []
      }, () => {
        if (typeof cb === 'function') {
          cb()
        }
      })
    },
  }
})
