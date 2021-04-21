 const calendar = require('./utils')
 Component({
   /**
    * 组件的属性列表
    */
   properties: {
     show: {
       type: Boolean,
       value: false
     },
     type: { //选择方式 单选 single 多选: multiple 区间 range
       type: String,
       value: 'multiple'
     },
     startDate: {
       type: String,
       value: ''
     },
     endDate: {
       type: String,
       value: ''
     },
     date: { //YYYY-MM-DD
       type: Array,
       value: [],
     },
     height: {
       type: Number,
       value: 1100
     },
     cancelColor: {
       type: String,
       value: '#333'
     },
     confirmColor: {
       type: String,
       value: '#0a1d66'
     },
     clickConfirmAutoClose: { //点击确定 是否自动关闭 弹窗
       type: Boolean,
       value: true
     },
     maskClose: {
       type: Boolean,
       value: true
     },

   },

   observers: {
     show(status) {
       status && this.show()
     }
   },

   /**
    * 组件的初始数据
    */
   data: {
     calendarData: null,
     status: false,
     curentMonth: '',
     selectDate: {}, //选中的日期

   },
   attached() {
     // 日历初始化
     const result = calendar.calendarData
     this.setData({
       calendarData: result
     })
     this.rangeSelected = {}
   },

   /**
    * 组件的方法列表
    */
   methods: {
     show() {
       this.setData({
         status: true,
         curentMonth: calendar.month
       })
     },
     hide() {
       this.setData({
         status: false
       })
     },

     // 点击天
     handleSelectDay(e) {
       switch (this.data.type) {
         case 'single':
           this.singleSelect(e)
           break
         case 'multiple':
           this.multiSelect(e)
           break
         case 'range': //TODO: range类型 
           this.multiSelect(e)
           break
         default:
           this.multiSelect(escape)
       }

     },
     handleConfirm() {
       const {
         selectDate,
         clickConfirmAutoClose
       } = this.data
       this.triggerEvent('onConfirm', Object.keys(selectDate))
       clickConfirmAutoClose && this.handleClose()
     },
     handleClose(reset) {
       this.hide()
       this.triggerEvent('onCancel', '')
       reset && this.reset()
     },

     //单选
     singleSelect(e) {
      const { day,  month,  year, index, select } = e.currentTarget.dataset
      const key = `${year}-${month}-${day}`
      const selectDate = {}
      selectDate[key] = true
    if(this.single_month || this.single_index ){
      this.setData({[`calendarData[${[this.single_month-1]}].days[${this.single_index}].select`]: false})
    }
    this.setData({
      [`calendarData[${[month-1]}].days[${index}].select`]: !select,
      selectDate
    },()=>{
      this.single_month = month
      this.single_index = index
    })
     
     },
     //多选选中
     multiSelect(e) {
       const { day,  month,  year, index, select } = e.currentTarget.dataset
       const key = `${year}-${month}-${day}`
       let {  selectDate } = this.data
       if (selectDate && selectDate.hasOwnProperty(key)) {
         selectDate[key] = !select
         select && delete selectDate[key]
       } else {
         selectDate[key] = true
       }
       this.setData({
         [`calendarData[${[month-1]}].days[${index}].select`]: !select,
         selectDate
       })
     },
     // 区间选中
     rangeSelect(e) {
      const { day,  month,  year, index, select } = e.currentTarget.dataset
      const key = `${year}-${month}-${day}`.toString()
      let {  selectDate } = this.data
      this.rangeSelected[key] = index
      const datekeys = Object.keys(this.rangeSelected)
      if(datekeys.length === 3){
        this.rangeSelectedToSet(false,()=>{
          this.rangeSelected = {}
          this.rangeSelected[key] = index
          this.rangeSelectedToSet(true)
        })
        return null
      }
      this.rangeSelectedToSet(true)
     },

     rangeSelectedToSet(flag,fn){
       console.log("this.rangeSelect:",this.rangeSelected)
       const rangeSelectedArray = Object.keys(this.rangeSelected)
       rangeSelectedArray.forEach( (key,i) =>{
        const splitDateKey = key.split('-')
        const [_year,_month,_day] = splitDateKey
        const dayIndex = this.rangeSelected[key]
        const curentDayOj = this.data.calendarData[`${[_month-1]}`].days[`${dayIndex}`]
        const tips = rangeSelectedArray[0]>rangeSelectedArray[1]?'止':'起'
        this.setData({
          [`calendarData[${[_month-1]}].days[${dayIndex}]`]: { ...curentDayOj,select:flag,tips },
        },()=>{
          fn && typeof fn === 'function' && fn()
        })
      })
     },

     //  重置
     reset() {
       this.setData({  
         calendarData: calendar.calendarData,
         selectDate:{}
       })
      
     }
   }
 })
