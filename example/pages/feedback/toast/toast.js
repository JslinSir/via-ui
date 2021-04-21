Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  onLoad() {
    this.$toast = this.selectComponent('#toast')
    this.$toastLoadingMove = this.selectComponent('#toastLoadingMove')
    this.$toastSlot = this.selectComponent('#toastSlot')
    
  },
  
  toast() {
    this.$toast.toast('Via UI')
  },
  success() {
    this.$toast.success('感谢使用！')
  },
  warn(){
    this.$toast.warn('时间已过期')
  },
  error() {
    this.$toast.error('提交失败')
  },
  loading(){
    this.$toast.loading('加载中')
  },
  loadingMove(){
    this.$toastLoadingMove.loading('加载中')
  },
  toastSlot(){
    this.$toastSlot.loading('')
  },

  toastSlotTime(){
    this.$toastSlot.loading('',3000)
  },

  
})