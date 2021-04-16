/**
 * 倒计时
 
 */
 import time from '../utils/time'

 Component({
  externalClasses: ["class-down-style","class-day-style","class-time-style","class-u-style"],
   properties: {
  
     startDate: {
       type: Number,
       value: 0
     },
     endDate: {
       type: Number,
       value: 0
     },
     date: {
       type: String,
       value: null
     },
     isShowDay:{
      type: Boolean,
      value: true
     },
     hu:{//小时的单位
      type: String,
      value: '时'
     },
     mu:{//分的单位
      type: String,
      value: '分'
     },
     su:{//秒的单位
      type: String,
      value: '秒'
     },
   },
   observers: {
    date(v) {
       const endDate = time.remainingTimeSeconds(this.properties.date)
       this.setData({ endDate })
     },
     endDate() {
       this.initDate()
     }
   },
   data: {
     day: 0, // 天
     hou: 0, // 小时
     min: 0, // 分
     sec: 0, // 秒
     text: ''
   },
   ready() {
     this.initDate()
   },
   detached() {
     if (this.countDownInterval) {
       clearInterval(this.countDownInterval)
     }
   },
   methods: {
     initDate() {
       if (this.countDownInterval) {
         clearInterval(this.countDownInterval)
       }
       if (this.data.startDate > 0) {
         const nowTime = new Date().getTime()/1000;//现在时间（时间戳）
         let endTime = nowTime + this.data.startDate
         const endDate = nowTime + this.data.endDate
         this.countDown(endTime)
      
         this.countDownInterval = setInterval(() => {
           if (this.countDown(endTime) === false) {
             // 清楚定时
             const nowTime = new Date().getTime()/1000;//现在时间（时间戳）
             if (endDate > nowTime) { // 
               endTime = endDate
               this.countDown(endTime)
               this.setData({text: this.data.endText})
               this.triggerEvent('onStart')
               return
             }
             this.triggerEvent('onEnd')
             clearInterval(this.countDownInterval)
           }
         }, 1000);
         return
       }
   
       const nowTime = new Date().getTime()/1000;//现在时间（时间戳）
       let endTime = nowTime + this.data.endDate
       this.countDown(endTime)
       this.setData({text: this.data.endText})
       this.countDownInterval = setInterval(() => {
         if (this.countDown(endTime) === false) {
           // 清楚定时 // 结束回调
           this.triggerEvent('onEnd')
           clearInterval(this.countDownInterval)
         }
       }, 1000);
   
     },
     countDown(endTime) {
       const nowTime = new Date().getTime()/1000;//现在时间（时间戳）
       // dateString = dateString.replace(/-/g, '/')
       // const endTime = new Date(dateString).getTime();//结束时间（时间戳）
       // console.log(nowTime, endTime)
       const time = endTime - nowTime;//距离结束的毫秒数
       if (time <= 0) {
         return false
       }
 
       // 获取天、时、分、秒
       let day = parseInt(time / (60 * 60 * 24));
       let hou = parseInt(time % (60 * 60 * 24) / 3600);
       let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
       let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
       
       this.setData({
         day: day,
         hou: this.timeFormat(hou),
         min: this.timeFormat(min),
         sec: this.timeFormat(sec)
       })
       return true
     },
     // 小于10的格式化函数（2变成02）
     timeFormat(param) {
       if (param < 0) {
         param = 0
       }
       return param < 10 ? '0' + param : param;
     }
   }
 });
 