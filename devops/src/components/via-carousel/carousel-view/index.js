 /**
  * 旋转木马,父容器
  */
import { CarouselViewDefaultProps } from './props'
 import { rpxToPx } from '../../utils/base'

Component({
  /**
   * 组件的初始数据
   */
  properties:CarouselViewDefaultProps,

  data: { },

 
  relations: {
    '../carousel-item/index': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        this.calculateSwiperTotalWidth()
      },
      linkChanged: function(target) {
      
      },
      unlinked: function(target) {
     
      }
    }
  },


  attached(){
    // 初始化 滑动距离
    this.translateDistance = 0

    // 初始化当前选中的子节点
    this.curIndex = 0
  },

 

 
  /**
   * 组件的方法列表
   */
  methods: {

    // 算出总滑动的长度
    calculateSwiperTotalWidth(){
      const { swiperItemNums, swiperItemWidth} = this.properties
      // 获取子节点个数
      const childNodes = this.getRelationNodes('../carousel-item/index')
      if(swiperItemNums && childNodes.length === swiperItemNums){

        const allWidth =  swiperItemNums  * ( swiperItemWidth )

        this.setData({ allWidth: allWidth  })
  
        // 暂纯 所有子节点
        this._childrenNodes = childNodes
         this._callChildrenMethod(this.curIndex, this._updateChildrenStatus)

        
   
      }
    },

    /**
     * 调用子节点方法
     * @param {*} curIndex 当前节点
     * @param {*} childrenMethod 需要调用的子节点方法
     */
    _callChildrenMethod(curIndex=0,childrenMethod){
      this._childrenNodes.forEach((cl,index)=>{
        typeof childrenMethod === 'function' && childrenMethod.call(this,cl,curIndex,index)
      })
    },

    // 更新初始化子节点状态信息
    _updateChildrenStatus(ctx,curIndex,index){
      ctx.update({
        active:curIndex==index,
        scale:this.properties.scale
       })
    },

 

 


  //触摸开始的事件
  swiperTouchstart: function (e) {
    // console.log('touchstart',e);
    const startClinetX = e.changedTouches[0].clientX;
    this.startClinetX = startClinetX //触摸开始位置；
    this.startTimestamp = e.timeStamp  //触摸开始时间；
    
  },

  //触摸移动中的事件
  swiperTouchmove: function (e) {
    // console.log('touchmove',e);
  },

  //触摸结束事件
  swiperTouchend: function (e) {
    
    // console.log("触摸结束",e);

    const times = e.timeStamp - this.startTimestamp //时间间隔；
    const distance = e.changedTouches[0].clientX - this.startClinetX; //距离间隔；
    //判断
     
    if (times < 500 && Math.abs(distance) > 10) {
      let curIndex = this.curIndex;

      let x0 = ( rpxToPx(this.data.swiperItemWidth )),x1 = this.translateDistance,x = 0;
       
      if ( distance > 0) {
       
        curIndex = curIndex - 1
        if(curIndex < 0){
          curIndex = 0;
          x0 = 0;
        }
        x = x1 + x0;
      } else {
      
        // console.log('+1',x);
        curIndex = curIndex + 1
        if (curIndex >= this.data.swiperItemNums) {
          curIndex = this.data.swiperItemNums-1;
          x0 = 0;
        }
        x = x1 - x0;
      }
     
      this._callChildrenMethod(curIndex, this._updateChildrenStatus)

       
      this._callChildrenMethod(curIndex,(ctx,curIndex)=>{
        ctx.animationToLarge((x))
        ctx.animationToSmall((x))
        this.translateDistance = x
      })
      this.curIndex = curIndex
      this.triggerEvent('onChange',curIndex)
      
    } else {
      
    }
  },
 
   
     
  }
})
