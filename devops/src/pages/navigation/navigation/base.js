Page({
  data: {
  type:"base"
  },
 async onLoad(options) {
    this.setData({
      type:options.type
    },async()=>{
      this.navigation2 = this.selectComponent(`#navigation2`)
      if(this.navigation2){
        const result = await this.navigation2.getNavData()
        console.log(result)
        this.setData({text:JSON.stringify(result)})
      }
    
    })
    
  },

  onPageScroll(e){
    this.selectComponent(`#navigation`).setScrollTop(e.scrollTop,200)
  },
  
});