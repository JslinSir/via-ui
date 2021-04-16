Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  onLoad() {
    this.$toast = this.selectComponent('#toast')
  },
  
  toast() {
    this.$toast.toast('Via UI')
  },
  success() {
    this.$toast.success('感谢使用！')
  },
  error() {
    this.$toast.error('提交失败')
  }
  
})