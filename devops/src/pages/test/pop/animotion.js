


   

/**
 * 遮罩显示动画
 * @param {*} ctx 
 * @param {*} select 
 */
const maskShow = (ctx,select)=> {

  return new Promise((revose)=>{
    this.animate('#popMask', [
      { opacity:0, },
      { opacity:1,},
      ], 300, function () {
        this.clearAnimation('#popMask', { opacity: false,}, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    }.bind(this))
  })

 

}




