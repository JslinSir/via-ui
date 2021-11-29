/*
 * @Description: 数字跳动
 */ 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   nums:{
     type:Number,
     value:0,
     observer: "setNums"
   },

   rate:{//跳动毫秒的频率
    type:Number,
    value:80,
   },
   total:{ //跳动发生总次数
    type:Number,
    value:8, 
   },
   startNum:{ //开始跳动的数字，如果大于等于10 执行跳动
    type:Number,
    value:10, 
   }


  },

  observers:{
    nums(v){
      if(v){
        this.setNums()
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    numsBeat:''
  },
 
  
  detached(){
    clearInterval(this.beatFn)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setNums(){
      const getPower = () => {
        const unitNum  = this.properties.nums/this.properties.total  //大概跳多少次
        if(unitNum>1){
         return unitNum
        }else{
         return 1.11
        }
 
     }
     const power = getPower()
     this.numsBeat = 0
     if(Number(this.properties.nums)<this.properties.startNum){
       this.setData({
         numsBeat:this.properties.nums
       })
       return false
     }
     this.beatFn  = setInterval(() => {
       this.numsBeat =  (Number(this.numsBeat) + Math.random()*(power)).toFixed(2)
       if(Number(this.numsBeat) > Number(this.properties.nums)){
         this.setData({
           numsBeat:this.properties.nums
         })
         clearInterval(this.beatFn)
         return false
       }
       this.setData({
         numsBeat:this.numsBeat
       })
     }, this.properties.rate);
    }
  }

})
