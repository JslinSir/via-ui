 import { CONFIGS } from '../../../components/svgs/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconNames:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   const iconNames = Object.keys(CONFIGS)
   this.setData({ iconNames })
  },

   
})