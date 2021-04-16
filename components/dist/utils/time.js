/**
 * 小于10补零
 * @param {*} n 
 */
 function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  
  /**
   * 格式化时间
   * @param formatDate 
   * @param formatString 
   */
  function formatTime(formatDate, formatString){
    const formateArr = ['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss'];
    const returnArr = []
    const date = new Date(...formatDate);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));
    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));
    for (var i in returnArr) {
      formatString = formatString.replace(formateArr[i], returnArr[i]);
    }
    return formatString
  }
  
  /**
   * 日期格式转数组
   * @param {*} timeString 2020-07-20 10:01:02 | 2020.07.20 10:01:02
   * @return [2020, 07, 20, 10, 01, 02]
   */
  function timeToArray(timeString) {
    const str = timeString.replace(/\.|\-|\s+/g, ':')
    return str.split(':')
  }
  
  /**
   * 根据日期 计算剩余的时间 （秒单位）
   * @param {*} dateString 
   */
  function remainingTimeSeconds(dateString) {
    if (!dateString) {
      return 0
    }
    const nowTime = new Date().getTime()/1000;//现在时间（时间戳）
    dateString = dateString.replace(/-/g, '/')
    const endTime = new Date(dateString).getTime()/1000;//结束时间（时间戳）
    // console.log(nowTime, endTime)
    const time = endTime - nowTime
    return time > 0? time: 0
  }
  
  /**
   * 根据参数返回前几天日期
   * @param {*} d 天数
   */
  function daysInterval(d) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate() + d;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const reckonDate = formatTime([year, month, day, hours, minutes, seconds], 'YYYY-MM-DD hh:mm:ss')
    const nowDate = formatTime([now], 'YYYY-MM-DD hh:mm:ss')
    if (d < 0) {
      return { start: reckonDate, end: nowDate }
    }
    return { start: nowDate, end: reckonDate }
  }
  
  module.exports = {
    remainingTimeSeconds,
    formatTime,
    timeToArray,
    daysInterval
  }