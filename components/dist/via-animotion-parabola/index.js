// 抛物线动画 TODO: 动画执行队列
Component({
  properties: {
    start: Object, //起点位置 {x:0,y:0}
    end: Object,  //终点位置 {x:0,y:0}
  },
  data: {
    styleX: '',
    styleY: '',
    status: true
  },
  ready(){
 
  },
  methods: {

    //  动画执行
    run(startRef, endRef) {
      this.setData({ status: true })
      if (startRef && endRef) {
        this.setData({ startPosition: `left: ${startRef.x}px;top: ${startRef.y}px;opacity:1;` })
        setTimeout(() => {
          this.setData({
            styleX: `transform:translateX(${endRef.x - startRef.x}px);`,
            styleY: `transform:translateY(${endRef.y - startRef.y}px);`
          })
          setTimeout(() => {
            this.setData({ status: false, styleX: '', styleY: '', startPosition: 'opacity:0', })
            console.log(this.queue)
          }, 420)
        }, 22)
    
      }
    },

  },
});