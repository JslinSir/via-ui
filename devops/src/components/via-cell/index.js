import { CellDefaultProps } from './props'
Component({
  externalClasses: ["class-cell-view"],
  options: {
    multipleSlots: true
  },
  properties: CellDefaultProps,
  data: {

  },
  methods: {
    handleCellClick() {
      this.triggerEvent('onClick')
    },
  },

});