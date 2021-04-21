Component({
  externalClasses: ["class-cell-view"],
  options: {
    multipleSlots: true
  },
  properties: {
    height: {
      type: Number,
      value: 120
    },
    width: {
      type: Number,
      value: 0
    },
    radius: {
      type: Number,
      value: 10
    }, 
    leftText: { //左边文案
      type: String,
      value: ''
    },
    leftTextSize: {//左边文案大小
      type: Number,
      value: ''
    },
    leftTextColor: {//左边文案颜色
      type: String,
      value: ''
    },
    leftIconSize: {
      type: Number,
      value: 28
    },
    leftIconName: {
      type: String,
      value: ''
    },
    leftIconColor: {
      type: String,
      value: ''
    },
    leftIconSrc: {
      type: String,
      value: ''
    },
    rightText: { //右边文案
      type: String,
      value: ''
    },
    rightTextSize: {//右边文案大小
      type: Number,
      value: 0
    },
    rightTextColor: {//右边文案颜色
      type: String,
      value: '#ccc'
    },
    rightIconSize: {
      type: Number,
      value: 28
    },
    rightIconName: {
      type: String,
      value: 'right'
    },
    rightIconColor: {
      type: String,
      value: '#ccc'
    },
    rightIconSrc: {
      type: String,
      value: ''
    },
    touchOpacity: {//点击的不透明度
      type: Number,
      value: 0.6,
    },
  },
  data: {

  },
  methods: {
    handleCellClick() {
      this.triggerEvent('onClick')
    },
  },

});