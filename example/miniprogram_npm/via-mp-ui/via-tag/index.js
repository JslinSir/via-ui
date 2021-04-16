Component({
  externalClasses: ["class-tags"],
  properties: {
    text:String, //标签文案
    fontSize:Number, // 字体大小
    fontColor:String, //字体颜色
    bgColor:String,   //标签背景
    radius:Number,   //标签圆角
    borderColor:String, //边线颜色


  },
  methods: {
    handleClick(){
      this.triggerEvent('onClick',this.data.text)
    },
  },

});