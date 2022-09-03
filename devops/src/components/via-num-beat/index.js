/*
 * @Description: 数字跳动
 */ 
import { NumBeatDefaultProps } from './props'
Component({
  /**
   * 组件的属性列表
   */
  properties: NumBeatDefaultProps,

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
