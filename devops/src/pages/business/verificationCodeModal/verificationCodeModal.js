Page({
  data: {
    
  },
  onLoad(options) {

    this.$codeModal = this.selectComponent('#via-verification-code-modal')
    this.$codeModal2 = this.selectComponent('#via-verification-code-modal2')
 

  },


  handleClick(){

    this.$codeModal.show()

  },

  handleClick2(){
    this.$codeModal2.show()
  },

  handleRightInput(e){
    const val = e.detail
    this.setData({val})
  
    //TODO: 去匹配验证码
    //正确了 关闭弹窗，错误提示....
    this.$codeModal.hide()
  },

  handleRefresh(){
    // 去掉接口
    this.$codeModal.show()
  },

  handleRefresh2(){
    // 去掉接口
    this.$codeModal2.runCutdown()
  },
 
  
 
 
});