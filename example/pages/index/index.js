
/**
 * via UI 
 * 
 * 基础组件包含：button  icon
 * 视图组件：image Tag loadingMore  Timeline(时间轴)  step Progress  Carousel sectionList(索引选择器)
 * 操作反馈：loading actionSheet toast modal dialog touchableOpacity mask
 * 布局组件：card cell collapse(折叠)    
 * 表单组件：searchBar(支持防抖) datePicker Calendar  switch radio  editor
 * 导航组件: navigation  tab 
 * 动画组件：加购动画，弹幕动画，骨架屏动画
 * 业务组件：倒计时，商品卡片，海报  清单项  ad(广告，弹窗 全屏)
 * 工具类 util  公用的wxs 库
 * TODO: 公共wxs 工具，navigationBar
 */
import { config } from './config'
Page({
  data: {
    pullStatus: false,
    refreshEnasble: false,
    showLoading: false,
    configData: config,
    status:false,
    tabs: [
      {
          name:'组件库',
          icon:'home',
          iconSelect:'homefill'
      },
     
      {
          name:'关于',
          icon:'emoji',
          iconSelect:'emojifill',
      }  
   ],
   tabControl: { '0': true },
  curentIndex:0,
  },

  onLoad: function () {
    this.setData({ refreshEnasble: true })
    this.adIdFull = this.selectComponent('#adIdFull')
    this.adIdFull.show()
  },

  handleTabChange(e){
    const { tabControl } = this.data
    const { index } = e.detail
    tabControl[`${index}`] = true
    this.setData({curentIndex:index,tabControl})
  },

  handleAdClose(){
    this.setData({status:true})
    const {safeArea:{ height }} = wx.getSystemInfoSync()
    this.setData({scrollHeight:height-140})
    
  },

  // 下拉
  handlePull: function (e) {
     this.setData({pullStatus:true})
   },
  // 触发
  handleRefresh(e) {
    if (this._freshing) return
    this.setData({ showLoading: true,pullStatus:true }, () => {
      setTimeout(() => { this.handleRestore() }, 1000 * 2)
    })

  },
  handleRestore(e) {
    this.setData({ refreshEnasble: true, showLoading: false }, () => {
      this.setData({ pullStatus: false })
    })
    console.log('复位', e)
  },
  handleAbort(e) {
    this.setData({ refreshEnasble: true,pullStatus:false })
    console.log('中断', e)
  },

  handleToComponentsIndex(e) { wx.navigateTo({ url: e.currentTarget.dataset.router }) },

  onShareAppMessage(){
    return {
      title: 'Via UI 一个简单易用UI组件库',
      path:'/pages/index/index',
      imageUrl:'../../img/share.png'
    }
  },
  onShareTimeline(){
    return {
      title: 'Via UI 一个简单易用UI组件库',
      path:'/pages/index/index',
      imageUrl:'../../img/share.png'
    }
  },

})
