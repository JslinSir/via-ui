 
 
 


Page({
  data: {
   config:[{
    title:'淡入',
    type:'fadein',
    duration:0.3
   },{
    title:'从底部淡入',
    type:'fadeinFromBottom',
    duration:0.3
   },
   {
    title:'从顶部淡入',
    type:'fadeinFromTop',
    duration:0.3
   },
   {
    title:'从左边淡入',
    type:'fadeinFromLeft',
    duration:0.3
   },
   {
    title:'从右边淡入',
    type:'fadeinFromRight',
    duration:0.3
   },
   {
    title:'缩放淡入',
    type:'fadeinScale',
    duration:0.3
   },
   {
    title:'上下摆动淡入',
    type:'fadeinSwingY',
    duration:0.55
   },
   {
    title:'左右摆动淡入',
    type:'fadeinSwingX',
    duration:0.55
   },
   {
    title:'旋转90',
    type:'rotate90',
    duration:0.3
   },
   {
    title:'旋转180',
    type:'rotate180',
    duration:0.3
   },
   {
    title:'旋转360',
    type:'rotate360',
    duration:0.4
   },
   {
    title:'抖动',
    type:'shake',
    duration:0.6,
   },

   {
    title:'果冻动画',
    type:'jello',
    duration:1,
   },

   

   
 
  ],

  curentIndex:null,

  

  },
  onLoad(options) {

    setTimeout(()=>{
      this.setData({curentIndex:0})
    },400)

  },
  onReady() {

  },


  handleClick(e){

    const { index } = e.currentTarget.dataset
    this.setData({curentIndex:index})
    
  },
   
});