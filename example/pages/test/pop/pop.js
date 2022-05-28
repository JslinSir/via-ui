Page({
  /**
   * 页面的初始数据
   */
  data: {
    status:false
  },

  onLoad(){

  

  },

  handleClick(){
    this.setData({visible:true})
  },

  handleClose(){
    this.selectComponent('#viaPop').hide()
  },


  maskShow(){
    this.animate('#popMask', [
      { opacity:0, },
      { opacity:1,},
      ], 300, ()=> {
        this.clearAnimation('#popMask', { opacity: false,}, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    })
  },

  maskHide(){
    this.animate('#popMask', [
      { opacity:1, },
      { opacity:0,},
      ], 300, function () {
        this.clearAnimation('#popMask', { opacity: true,}, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    }.bind(this))
  },

  popShow(){
    this.animate('#popCotent', [
      { translateY: '100%', opacity:0, easing:'ease-in-out' },
      { translateY: '0',opacity:1, easing:'ease-in-out'},
      ], 260, function () {
        this.clearAnimation('#popCotent', { translateY: true,opacity:false }, ()=>{
     
        })
    }.bind(this))
  },

  popHide(){
    this.animate('#popCotent', [
      { translateY: '0', opacity:1, easing:'ease-in-out' },
      { translateY: '100%',opacity:0, easing:'ease-in-out'},
      ], 260, function () {
        this.clearAnimation('#popCotent', { translateY: true,opacity:true },()=>{
          this.setData({status:false})
        })
    }.bind(this))
  },

  
 
});
