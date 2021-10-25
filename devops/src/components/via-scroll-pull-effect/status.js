/*
 * @Description: 错误捕获
 */


module.exports = Behavior({
  behaviors: [],
  properties: {
    
  },
  data: {

    // 页面加载状态
    pageLoading:false,

    // 页面错误状态
    pageError:false,

    // 页面空列表状态
    pageEmpty:false,


  },
  attached: function () {

  },
  methods: {

    /**
     * 设置页面加载状态
     */
    setPageLoading(){
      this.setData({pageLoading:true})
    },

    /**
     * 设置 错误状态
     */
    setPageError(){

      this.reSetPageSatatus()

      wx.nextTick(()=>{
        this.setData({pageError:true})
      })

     

    },

    /**
     * 设置页面空状态
     */
    setPageEmpty(){

      this.setData({pageEmpty:true})

    },



    /**
     * 重置页面状态
     */
    reSetPageSatatus(){

      this.setData({pageError:false,pageEmpty:false,pageLoading:false})

    },
 
  }
});