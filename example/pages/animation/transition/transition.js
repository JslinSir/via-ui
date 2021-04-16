Page({
  data: {
    show:true,
    show2:true,
    show3:true,
    show4:true,
    show5:true,
    show6:true,
    show7:true,
    show8:true
  },
  onLoad(options) {

  },
  onReady() {

  },
  
  handleClickFadein(){
    this.setData({show:false})
    setTimeout(()=>{
      this.setData({show:true})
    },1000)
  
  },

  handleClickFadein2(){
    this.setData({show2:false})
    setTimeout(()=>{
      this.setData({show2:true})
    },1000)
  
  },

  handleClickFadein3(){
    this.setData({show3:false})
    setTimeout(()=>{
      this.setData({show3:true})
    },1000)
  
  },

  handleClickFadein4(){
    this.setData({show4:false})
    setTimeout(()=>{
      this.setData({show4:true})
    },1000)
  
  },

  handleClickFadein5(){
    this.setData({show5:false})
    setTimeout(()=>{
      this.setData({show5:true})
    },1000)
  
  },


  handleClickFadein6(){
    this.setData({show6:false})
    setTimeout(()=>{
      this.setData({show6:true})
    },1000)
  
  },

  handleClickFadein7(){
    this.setData({show7:false})
    setTimeout(()=>{
      this.setData({show7:true})
    },1000)
  
  },


  handleClickFadein8(){
    this.setData({show8:false})
    setTimeout(()=>{
      this.setData({show8:true})
    },1000)
  
  },


  handleClickFadeOut(){
    this.setData({transition:''})
    setTimeout(()=>{
      this.setData({transition:'fadeout'})
    },1000)
  
  },
});