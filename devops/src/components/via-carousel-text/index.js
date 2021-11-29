let clumnStatus = {}
Component({
  externalClasses: ["class-scroll-text","class-swiper-container","class-hot-item"],
  properties: {
    speed: {
      type: Number,
      value: 3
    },
    direction: {
      type: String,
      value: 'row'
    },
    height:{
      type: Number,
      value: 60 
    },
    text: {
      type: String | Array,
      value: ''
    }
  },
  observers: {
    text(v) {
      if (v) {
        setTimeout(()=>{
          if (this.properties.direction === 'row') {
            this.animation()
          }  
        },200)
       

      }
    },
  },
  data: {
    show: true,
    textType: 'string',
    clumnStatus: {
      0: true,
    },
  },
 
  detached(){
    this.setData({clumnStatus:{0:true}})
    clumnStatus = {}
    this.clearAnimation('#container')
    this.clearAnimation(`#containerClomn${this.index}`)
  },
  methods: {
    animation() {
      const { speed } = this.properties
      this.animate('#container', [
        { translateX: 0 },
        { translateX: '-100%' },
      ], speed * 1000, function () {
        this.setData({ show: false }, () => {
          this.setData({ show: true })
          setTimeout(() => this.runByRight())
        })
      }.bind(this))
    },

    runByRight() {
      const { speed } = this.properties
      this.animate('#container', [
        { translateX: '100%' },
        { translateX: '-120%' },], speed * 1000 * 2, function () {
          this.runByRight()
        }.bind(this))
    },

 
  },
});