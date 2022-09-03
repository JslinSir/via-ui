/**
 * 日期映射关系
 */
const DATETIMEENUM = {
  YEAR: 0,
  MONTH: 1,
  DAY: 2,
  HH: 3,
  MM: 4,
  SS: 5
}
// 时间映射关系
const TIMEENUM = {
  HH: 0,
  MM: 1,
  SS: 2
}
import { DatePickerCellDefaultProps } from './props'
import datepicker from './behavior'
import {
  unitZero,
  createArray
} from '../utils/base'

// 时间
const HOUR = createArray(24)

// 分
const MIN = createArray(60)

// 秒
const SECOND = createArray(60)

Component({
  behaviors: [datepicker],
  options: {

  },
  properties: DatePickerCellDefaultProps,

  /**
   * 组件的初始数据
   */
  data: {
    years: [],
    months: [],
    days: [],
    hour: HOUR,
    min: MIN,
    second: SECOND,
    selectedValue: [],
    // 是否禁用
    forbidden: null,
    selectPickerText: ''
  },

  observers: {
 
   

    mode(v){
      v && this.setData({_mode:v})
    },

    selectedValue(v) {
      const {
        _mode:mode
      } = this.data
      //  只有滚动 触发 onChange 事件，其他情况不触发
      this._toRenderExe()[`${mode}Change`].call(this, v, false)
    },

  },

  methods: {
    render(paramsVal) {
      this._renderPicker(true,paramsVal)
    },
    
    /**
     * 渲染日期时间
     */
    _renderPicker(flag,paramsVal) {
      const {
        _mode:mode
      } = this.data
      this._toRenderExe()[mode].call(this,flag,paramsVal)
    },

    /**
     * 渲染执行机
     */
    _toRenderExe() {
      return {
        date: this._renderDate,
        time: this._renderTime,
        dateTime: this._renderDateTime,
        dateChange: this._renderDateChange,
        timeChange: this._renderTimeChange,
        dateTimeChange: this._renderDateTimeChange,

      }
    },

    /**
     * 渲染日期节点 
     * @param {*} renderFlag  渲染标识，是否走 下面setData
     */
    _renderDate(renderFlag = true,paramsVal) {
      const date = new Date()

      const {
        beginRange,
        endRange
      } = this.properties
      
      const curentYear = date.getFullYear()

      const beginYear = curentYear - beginRange

      const yearsLenArray = createArray(beginRange + endRange + 1)

      const years = yearsLenArray.map(item => beginYear + item)

      const value = paramsVal ? paramsVal :this.data.value 

      const year = value[0] ? parseInt(value[DATETIMEENUM.YEAR]) : curentYear

      const month = value[1] ? parseInt(value[DATETIMEENUM.MONTH]) : date.getMonth() + 1

      const day = value[2] ? parseInt(value[DATETIMEENUM.DAY]) : date.getDate()

      this.year = year

      this.month = month

      const months = this._setMonths(12)
      const days = this._setDays(year, month)

      const yearIndex = years.indexOf(year)
      const monthIndex = months.indexOf(month)
      const dayIndex = days.indexOf(day)

      this.confimValue = [year, month, day]

      // 阻止渲染
      if (!renderFlag) return {
        years,
        months,
        days,
        yearIndex,
        monthIndex,
        dayIndex
      }

      this.setData({
        years,
        months,
        days,
      })

      wx.nextTick(() => {
        this.setData({
          selectedValue: [yearIndex, monthIndex, dayIndex]
        })
      })

      this.pickerStatus = false

    },

    /**
     * 渲染时间节点
     */
    _renderTime( renderFlag = true,paramsVal,enums = TIMEENUM) {
      const value =  paramsVal ? paramsVal :this.data.value 
      const hh = value[enums.HH] ? parseInt(value[enums.HH]) : 0
      const mm = value[enums.MM] ? parseInt(value[enums.MM]) : 0
      const ss = value[enums.SS] ? parseInt(value[enums.SS]) : 0
      const hhIndex = HOUR.indexOf(hh)
      const mmIndex = MIN.indexOf(mm)
      const ssIndex = SECOND.indexOf(ss)
      this.confimValue = [hh, mm, ss]
      if (!renderFlag) return [hhIndex, mmIndex, ssIndex]
      this.setData({
        selectedValue: [hhIndex, mmIndex, ssIndex]
      })
    },

    /**
     * 渲染日期时间节点
     */
    _renderDateTime(paramsVal) {
      const {
        years,
        months,
        days,
        yearIndex,
        monthIndex,
        dayIndex
      } = this._renderDate(false,paramsVal)
      const timeRenders = this._renderTime(false,paramsVal,DATETIMEENUM)
      this.setData({
        years,
        months,
        days,
      })
      wx.nextTick(() => {
        this.setData({
          selectedValue: [yearIndex, monthIndex, dayIndex, ...timeRenders]
        })
      })

      this.pickerStatus = false

    },




    /**
     * 创建月份
     */
    _setMonths(len) {
      return createArray(len).map(item => item + 1)
    },

    _setDays(year, month) {
      month = parseInt(month, 10);
      const assignDate = new Date(year, month, 0)
      const maxDay = assignDate.getDate();
      return createArray(maxDay).map(item => item + 1)
    },



    pickerChangeStart() {
      this.pickerStatus = true

      this.setData({
        forbidden: 'forbidden'
      })
    },

    pickerChangeEnd() {
      // 延迟
      setTimeout(() => {
        this.pickerStatus = false
        this.setData({
          forbidden: null
        })
      }, 100)
    },

    /**
     * picker 改变事件
     * @param {*} e 
     */
    pickerChange(e) {
      const value = e.detail.value
      const {
        _mode:mode
      } = this.data
      
      this._changeEffetc(value, mode)

    },

    /**
     * 滚动副作用，年改变，月要滑到一月，天要重新计算该年该月多少天
     * @param {*} selectVal 
     * @param {*} mode 
     */
    _changeEffetc(selectVal, mode) {
      const {
        year,
        month
      } = this._getSelectArrayVal(selectVal)
      let back = false
      let value = selectVal
      if(mode!='time'){
        if (this.year !== year) {
          value[DATETIMEENUM.MONTH] = 0
          value[DATETIMEENUM.DAY] = 0
          back = true
        }
        if (this.month !== month) {
          value[DATETIMEENUM.DAY] = 0
          back = true
        }
      }
    
      back && this.setData({
        selectedValue: value
      })
      this._toRenderExe()[`${mode}Change`].call(this, value)

    },


    /**
     * 渲染日期变化
     * @param {*} selectVal 
     * @param {*} flag 
     */
    _renderDateChange(selectVal, flag = true) {
      const {
        val: value,
        text: selectPickerText,
        year,
        month
      } = this._getSelectArrayVal(selectVal)
      this.year = year
      this.month = month
      this.triggerEvent('onChange', {
        value,
        flag,
        selectPickerText
      })
    },

    /**
     * 渲染时间变化
     */
    _renderTimeChange(selectVal, flag = true) {
      const {
        val: value,
        text: selectPickerText,
      } = this._getSelectArrayVal(selectVal)

       this.triggerEvent('onChange', {
        flag,
        selectPickerText,
        value
      })
    },

    /**
     * 渲染日期时间
     */
    _renderDateTimeChange(selectVal, flag = true) {
      const {
        val: value,
        text: selectPickerText,
        year,
        month
      } = this._getSelectArrayVal(selectVal)
      this.year = year
      this.month = month
     this.triggerEvent('onChange', {
        flag,
        selectPickerText,
        value
      })
    },




    /**
     * 获取当前选中值
     * 
     */
    _getSelectArrayVal(selectVal) {
      const {
        years,
        months,
        days,
        isUnitZero,
        dateTextFormatChart,
        dateValFormatChart,
        timeTextFormatChart,
        timeValFormatChart,
        _mode:mode
      } = this.data
      /**
       * 计算日期
       */
      this._getSelectArrayVal.dateCacularVal = () => {
        const year = years[selectVal[DATETIMEENUM.YEAR]]
        let month = months[selectVal[DATETIMEENUM.MONTH]]
        let day = days[selectVal[DATETIMEENUM.DAY]]
        if (isUnitZero) {
          month = unitZero(month)
          day = unitZero(day)
        }
        const val = [year, month, day].join(dateValFormatChart)
        const text = [year, month, day].join(dateTextFormatChart)
        this._confirm = val
        return {
          val,
          text,
          year,
          month
        }
      }
      /**
       * 计算时间
       */
      this._getSelectArrayVal.timeCacularVal = (enums = TIMEENUM) => {
        let hh = HOUR[selectVal[enums.HH]]
        let mm = MIN[selectVal[enums.MM]]
        let ss = SECOND[selectVal[enums.SS]]
        if (isUnitZero) {
          hh = unitZero(hh)
          mm = unitZero(mm)
          ss = unitZero(ss)
        }
        const val = [hh, mm, ss].join(timeValFormatChart)
        const text = [hh, mm, ss].join(timeTextFormatChart)
        this._confirm = val
        return {
          val,
          text,
        }
      }

      /**
       * 计算日期时间
       */
      this._getSelectArrayVal.dateTimeCacularVal = () => {

        const dateVals = this._getSelectArrayVal.dateCacularVal()
        const timeVals = this._getSelectArrayVal.timeCacularVal(DATETIMEENUM)
        this._confirm = `${dateVals.val} ${timeVals.val}`
        return {
          val: this._confirm,
          text: `${dateVals.text} ${timeVals.text}`,
          year: dateVals.year,
          month: dateVals.month
        }

      }

      return this._getSelectArrayVal[`${mode}CacularVal`]()




    },




    /**
     * 确认按钮
     */
    handleConfirm(e) {
      if (this.pickerStatus === false) {
        this.triggerEvent('onConfirm', {
          value: this._confirm
        })   
      }
    },

    /**
     * 点击重置按钮 
     */
     handleReset() {
      this.triggerEvent('onRest', '')
    },

  }
})
