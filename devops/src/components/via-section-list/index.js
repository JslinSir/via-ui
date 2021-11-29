/**
 * 待完善滚动时 ，右边单词也跟随滚动
 */
import { getRect } from '../utils/noderef'

Component({
  properties: {
    scrollHeight: Number,
    dataSource: Array, //数据源格式 [{"id": "31359","name": "深圳市","index": "S"}] 
  },
  data: {
    cityLetter: [],
    cityList: [],
    curentSection: '',
    curentSectionIndex: '',
    airClass: ''
  },
  observers: {
    dataSource(data) {
      if (data) this.handleCityData(data)
    }
  },

  methods: {

    handleCityCellClick(e) {
      const { item } = e.currentTarget.dataset
      this.triggerEvent('onClick',item)
    },
  
    handleLetterSelect(e) {
      this.noScroll = false
      const { section: curentSection } = e.currentTarget.dataset
      this.setData({ curentSection, airClass: 'section-air-show',curentSectionIndex:'-1' })
      setTimeout(() => {
        this.setData({ airClass: 'section-air-hidden' })
      }, 1000)
    },


    handleScrol(e) {
      // const { scrollTop } = e.detail
      // const preIndex = this.refResult.findIndex(({ top }) => scrollTop < top)
      // const curentIndex = preIndex - 1 > -1 ? preIndex - 1 : ''
      // this.setData({ curentSectionIndex:curentIndex,curentSection:'-1',  })
  },

    handleCityData(data) {
      // 获取字母列表 去重，排序
      const cityList = {}
      let cityLetter = data.map((v) => {
        if (cityList[v.index]) {
          cityList[v.index].push(v)
        } else {
          cityList[v.index] = [v]
        }
        return v.index
      })
      cityLetter = Array.from(new Set(cityLetter)).sort()

      this.setData({ cityLetter, cityList })

      this.getRefInfo()
    },

    async getRefInfo() {
      const result = await getRect(this, '.section-item', true)
      this.refResult = result
    },


  },
});