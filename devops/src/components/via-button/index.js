import { ButtonDefaultProps } from './props'

Component({
  externalClasses: ["class-button", "class-button-disabled"],
  properties: ButtonDefaultProps,
  /**
   * 组件的初始数据
   */
  data: {
    status: 'normal', // loading,disabled,normal
  },




  observers: {
    'loading,disabled'() {
      this.btnStatusChange()
    },
    with(w) {
      if (w.includes('%')) {
        this.setData({
          with: w
        })
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    btnStatusChange() {
      const { loading, disabled, touchOpacity } = this.properties
      switch (true) {
        case loading:
          this.setData({ status: 'loading', touchOpacity: 1 })
          break
        case disabled:
          this.setData({ status: 'disabled', touchOpacity: 1 })
          break
        default:
          this.setData({ status: 'normal', touchOpacity })
      }
    },

    handleBtnClick(e) {
      const { status } = this.data
      if (status === 'normal') {
        this.triggerEvent('onClick', e)
      }
    },

  }
})