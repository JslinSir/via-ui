import { DatePickerDefaultProps } from './props'
import datepicker from '../via-date-picker-cell/behavior'

Component({
  behaviors: [datepicker],
  options: {
    multipleSlots: true
  },
  externalClasses: [],

  properties: DatePickerDefaultProps,


  /**
   * 组件的初始数据
   */
  data: {

  },


  ready(){
    this.$dateCell = this.selectComponent('#date-picker-cell-id')
  },


  methods: {

    show() {
      this.$pop.show()
      this.$dateCell.render()
    },

    hide() {
      this.$pop.hide()
      setTimeout(() => {
        this.$dateCell.handleRest()
      }, 100)
    },

    /**
     * 日期变化事件
     * @param {*} e 
     */
    handleDateChange(e) {
      const { value,selectPickerText, flag } = e.detail
      this.setData({selectPickerText})
      flag && this.triggerEvent('onChange',{ value })
    },

    /**
     * 确认按钮
     */
    handleConfirm(e) {
      const { value } = e.detail
      this.triggerEvent('onConfirm', {
        value
      })
        const {
          autoClose
        } = this.data
        autoClose && this.hide()
        // 否则点击确定手动关闭，进行值的校验

    
    },

    /**
     * 点击重置按钮 
     */
    handleReset() {
      wx.nextTick(()=>{
        this.$dateCell.render()
        this.triggerEvent('onRest', '')
       }) 
    },

  }
})
