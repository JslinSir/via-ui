import { TagDefaultProps } from './props'
Component({
  externalClasses: ["class-tags"],
  properties: TagDefaultProps,
  methods: {
    handleClick(){
      this.triggerEvent('onClick',this.data.text)
    },
  },

});