 
 import calendar from './utils'

 Component({
   /**
    * 组件的属性列表
    */
   properties: {
    
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

  

   /**
    * 组件的初始数据
    */
   data: {
     calendarData: null,
     curentMonth: '',
     curentMothScrollInto:null,
     selectDate: {}, //选中的日期

   },
   attached() {
     // 日历初始化
     const curent = new Date()
    //  开始年 去年的 后三个月
     const preDate = new calendar(new Date(curent.getFullYear()-1,9,1)).calendarData
    //  结束 明年的前三个月
     const nextDate = new calendar(new Date(curent.getFullYear()+1,9,1)).calendarData

      

     this.curentCalendar = new calendar() 
     this.setData({
       calendarData: this.curentCalendar.calendarData
     })
     this.rangeSelected = {}
   },

   /**
    * 组件的方法列表
    */
   methods: {
     show() {
       this.selectComponent('#popModal').show()
       this.setData({curentMonth: this.curentCalendar.month,},()=>{
         this.setData({
          curentMothScrollInto:`calendar_id_${this.curentCalendar.month}`
         })
       })
     },
     hide() {
      this.triggerEvent('onClose')
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
       clickConfirmAutoClose && this.selectComponent('#popModal').hide()
     },
     handleClose(reset) {
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
