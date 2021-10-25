export default class Calendar {
  constructor(dateTarget) {
    this.CurentDate = new Date()
    if(dateTarget && Object.prototype.toString.call(dateTarget) === '[object Date]'){
      this.CurentDate = dateTarget
    }
    this.year = this.CurentDate.getFullYear()
    this.month = this.CurentDate.getMonth() + 1
    this.day = this.CurentDate.getDate()
    this.init()
  }

  // 初始化
  init() {
    const monthArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    const calendarData = monthArry.map((item) => {
      const perMonthDays = this.getEachMonthDay(this.year, item)
      const firstDayWeekNo = this.getWeekNo(this.year, item)
      // 算出要填充的天数
      const seatDay = new Array(firstDayWeekNo).fill('')
      const days = seatDay.concat(perMonthDays)
      const dasys_oj =  days.map( item => {return { day:item, select:false,tips:''}})
      return {
        weeks,
        days:dasys_oj,
        month:item,
        year:this.year,
        curentMonth:this.month,
        curentDay:this.day
      }
    })
    this.calendarData = calendarData
  }

  /**
   * 计算月的天数
   * @param {*} year  2021 ....
   * @param {*} month  1,2,3,4,5,6,7,8,9,10,11,12
   * 月份不需要减 1
   */
  getDaysByMonth(year = this.year, month = this.month) {
    const d = new Date(year, month, 0)
    return d.getDate()
  }

  /**
   * 计算当前月的第一天星期几
   * @param {*} year  2021 ....
   * @param {*} month  1,2,3,4,5,6,7,8,9,10,11,12
   * 月份需要 减 1
   */
  getWeekNo(year = this.year, month = this.month) {
    const weekno = new Date(year, month - 1, 1).getDay()
    return weekno
  }
  /**
   * 获取每个月的天 1,2,3......
   * @param {*} year 
   * @param {*} month 
   */
  getEachMonthDay(year = this.year, month) {
    const daysArray = new Array(this.getDaysByMonth(year, month)).fill(1)
    const days = daysArray.map((item, index) => index + 1)
    return days
  }

  /**
   *  获取当前日期
   */
  getCurentDate() {
    // date 字符串格式必须是 YYYY/MM/DD  否则 ios可能不显示
    // const timestamp = new Date(date);
    const addZero = v => v >= 10 ? v : `0${v}`
    const timestamp = new Date();
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    return {
      year,
      month,
      day,
      flatDate: `${year}-${addZero(month)}-${addZero(day)}`
    }
  }


}



 
