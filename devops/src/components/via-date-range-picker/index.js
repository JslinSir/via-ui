import datepicker from '../via-date-picker-cell/behavior'

Component({
  behaviors: [datepicker],
  options: {
    multipleSlots: true
  },
  externalClasses: [],

  properties: {
    //标题
    rangeTitle:{
      type:Array,
      value:null
    },
    // 未选中tab 文字颜色
    noActiveColor:{
      type: String,
      value: '#323232'
    },
  },

 

  /**
   * 组件的初始数据
   */
  data: {
   curenIndex:0,
   selectPickerText:null,
   rangeValue:null,
   confirmVal:null,
  },

  observers:{
    value(initValue){
      initValue && Array.isArray(initValue) && (this._initValue = initValue)
    },
   
  },

  ready(){
    this.$dateCell = this.selectComponent('#date-picker-cell-id')
  },

  

  methods: {

    show() {
      wx.nextTick(()=>{
        this.$pop.show()
        this.rangeInitRender()
      })
    },

    hide() {
      this.clearRange()
      this.$pop.hide()
      
    },

    rangeInitRender(){
      const { curenIndex } = this.data
      if(Array.isArray(this._initValue) && this._initValue.length>0){
        const { pickerText, pickerValue } = this.getSelectPicker()
        this.setData({
          [`selectPickerText`]:pickerText,
          [`rangeValue`]:this._initValue,
          [`confirmVal`]:pickerValue
        })
        this.$dateCell.render(this._initValue[curenIndex])
      }else{
        this.$dateCell.render()
      }
    },

    /**
     * 选择开始，结束时间
     * @param {*} e 
     */
    handleSelectDate(e){
      const { curenIndex,rangeValue } = this.data
      const { index} = e.currentTarget.dataset
      curenIndex !=index && this.setData({curenIndex:index},()=>{
        this.$dateCell.render(rangeValue[index])
      })
     
    },
    /**
     * 日期变化事件
     * @param {*} e 
     */
    handleDateChange(e) {
      const { curenIndex,value:initval } = this.data
      const { value,selectPickerText, flag } = e.detail
      if(!flag){// 初始渲染
         this.setData({
          [`selectPickerText[${curenIndex}]`]:selectPickerText,
          [`rangeValue[${curenIndex}]`]:this.getArrayVal(value),
          [`confirmVal[${curenIndex}]`]:value 
        })
      }else{ // picker change
        this.setData({
          [`selectPickerText[${curenIndex}]`]:selectPickerText,
          [`rangeValue[${curenIndex}]`]:this.getArrayVal(value),
          [`confirmVal[${curenIndex}]`]:value 
        },()=>{
          this.triggerEvent('onChange',{ value:this.data.confirmVal })
        })
      }
      
    
     
      
     
    },
   
    /**
     * 格式化字符串为数组
     * @param {*} value 
     */
    getArrayVal(value){
      // 先格式化空格，得到日期和时间数组
      const { dateValFormatChart, timeValFormatChart } = this.properties
      const [dateStr,timeStr] = value.split(' ')
      const dateArray = dateStr.split(dateValFormatChart)
      const timeArray = timeStr ? timeStr.split(timeValFormatChart) :[]
      return [...dateArray,...timeArray]

    },
   /**
    * 获取组件传入值，格式化
    * @param {*} v 
    * [[2021,11,21,00,00,00],[2021,11,21,00,00,00]]
    */
    getSelectPicker(v){
      try{
        if(v && Array.isArray(v) && v.length>0){
          const { dateTextFormatChart,dateValFormatChart, timeTextFormatChart ,timeValFormatChart} = this.properties
          const startDate = v[0].slice(0,3)
          const startTime = v[0].length>3 ? v[0].slice(3,6) : []
          const endDate = v[1].slice(0,3)
          const endTime = v[1].length>3 ? v[0].slice(3,6) : []
          
          const pickerText = [
            `${startDate.join(dateTextFormatChart)}${startTime.length!=0? ' ' : '' }${startTime.join(timeTextFormatChart)}`,
            `${endDate.join(dateTextFormatChart)}${endTime.length!=0? ' ' : '' }${endTime.join(timeTextFormatChart)}`,
          ]
          const pickerValue = [
            `${startDate.join(dateValFormatChart)}${startTime.length!=0? ' ' : '' }${startTime.join(timeValFormatChart)}`,
            `${endDate.join(dateValFormatChart)}${endTime.length!=0? ' ' : '' }${endTime.join(timeValFormatChart)}`,
          ]
          return {
            pickerText,
            pickerValue
          }
        }else{
          return {
            pickerText:'',
            pickerValue:''
          }
        }
       

      }catch(e){
        console.error(e)
      }
    },

    /**
     * 确认按钮
     */
    handleConfirm(e) {
      const { confirmVal } = this.data
      const { autoClose  } = this.data
        autoClose && this.hide()
        // 否则点击确定手动关闭，进行值的校验
        wx.nextTick(()=>{
          this.triggerEvent('onConfirm', {
            value:confirmVal
          })
        })
    },

    clearRange(){
      this._initValue = null
      this.setData({
        curenIndex:0,
        selectPickerText:null,
        rangeValue:null,
        confirmVal:null,
      })
    },

    /**
     * 点击重置按钮 
     */
    handleReset() {
      this.clearRange()
       wx.nextTick(()=>{
        this.$dateCell.render()
        this.triggerEvent('onRest', '')
       })  
    },

  }
})
