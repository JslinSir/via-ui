
import { ActionSheetDefaultProps } from './props'
Component({
  externalClasses: ["class-action-title"],
  options: {
    multipleSlots: true
  },
  properties: ActionSheetDefaultProps,

  observers: {
    actionStatus(actionShow) {
      if (actionShow) {
        this.show()
      } else {
        this.hide()
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.selectComponent('#popIDAction').show()
    },
    hide() { this.selectComponent('#popIDAction').hide() },

    handleItemClick(e) {
      const { index } = e.currentTarget.dataset
      const curent = this.data.actionData[index]
      this.triggerEvent('onClick', curent)
    },
    handleCancel() {
      this.hide()
      this.triggerEvent('onClose', '')
    }
  }
})
