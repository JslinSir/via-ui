Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  onLoad() {
    this.modal = this.selectComponent('#alert')
  },
  alertIsArray() {
    const content = ['周一 09:00', '周二 09:00', '周三 09:00']
    this.modal.alert({title: '我是标题', okText: '我知道了', content, style: "line-height: 60rpx;text-align: center"})
  },
  alert() {
    this.modal.alert({title: 'Via UI', okText: '加油💪🏻', content: '你所看到的是via用心呈现的'})
  },
  confirm() {
    this.modal.confirm({okText: '是的', cannelText: '否', content: '准备使用 Via UI ？'})
  },
  
  
})