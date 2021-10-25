Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  onLoad() {
    this.$message = this.selectComponent('#message')
 
    
  },
  
  message() {
    this.$message.message('Via UI')
  },
  success() {
    this.$message.success('感谢体验 Via UI')
  },
  warn(){
    this.$message.warn('如果这条消息很长的话，就会省略显示的，这个体验起来美观一些')
  },
  error() {
    this.$message.error('若有bug,多多包涵！')
  },
  loading() {
    this.$message.loading('加载中...')
  },

  slotTime(){
    this.$message.loading('加载中...',3000)
  },
  
  handleClose(){
    console.log('关闭')
  },
  
})