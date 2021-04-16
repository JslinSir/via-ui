
// loading actionSheet toast modal dialog touchableOpacity mask
const config = [
  {
    name: 'touchableOpacity 按压态',
    nav: '../touchOpacity/touchOpacity'
  },
  {
    name: 'Toast 吐司',
    nav: '../toast/toast'
  },
  {
    name: 'Alert 对话框',
    nav: '../alert/alert'
  },
  {
    name: 'Mask 遮罩',
    nav: '../mask/mask'
  },
  {
    name: 'Pop 弹出层',
    nav: '../pop/pop'
  },
  {
    name: 'Pop 模态弹出层',
    nav: '../popModal/popModal'
  },
  {
    name: 'ActionSheet  操作栏',
    nav: '../actionSheet/actionSheet'
  },
  {
    name: 'Collapse  折叠面板',
    nav: '../collapse/collapse'
  },
  
]
Page({

  data: {
    config
  },

  handleJunmp(e){
    const { nav:url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },


})