import { PopModalDefaultProps } from './props'
Component({
  externalClasses: ["class-pop-bottom-view", "class-pop-center-view", "class-header-title"],
  options: {
    multipleSlots: true
  },
  properties: PopModalDefaultProps,
  data: {
    confirmDisabledStatus:false
  },

  observers:{
    confirmDisabled(v){
      this.setData({confirmDisabledStatus:v})
    }
  },
 
  created() {
    this.$pop = this.selectComponent('#popid')
  },

  methods: {
    show() {
      this.$pop.show()
    },
    hide() {
      this.$pop.hide()
      this.triggerEvent('onClose', '')
    },
    handleConfirm() {
      this.triggerEvent('onConfirm', '')
    },
  },
});