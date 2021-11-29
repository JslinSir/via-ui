/**
 * 验证码弹窗业务组件
 */

Component({
  behaviors: [],
  properties: {

  },
  data: {
    status:false,
    codes:[],
  },
  lifetimes: {
    created() {

    },
    attached() {
      this.$modal = this.selectComponent('#pop-modal')
    },
    moved() {

    },
    detached() {

    },
  },
  methods: {

    show(){
      this.$modal.show()
      this.setData({status:true})
    },


    hide(){
      this.$modal.close()
      this.setData({status:false})
    },

    handleFocus() {
      this.setData({
        inputStyle: 'left: -2000rpx'
      })
      this.setData({isFocus: true})
    },

    handleInput(e){
      const { value } = e.detail
      console.log('value:',value)
      this.setData({
        codes: value.split('')
      })

      console.log(this.data.codes)
      
        
    },
  },
});