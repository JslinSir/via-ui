Page({
  data: {
    type:'base',
    config:[{
      name:'基本用法(占位)',
      type:'base'
    },{
      name:'包裹用法',
      type:'slot'
    },{
      name:'自定义颜色',
      type:'color'
    }],
    htmlSnip:{
      base:` <view class="fixed-bottom">
      <view>以上是底部安全范围</view>
      <via-iphonex-bottom-safe />
  </view>`,
      slot:` <view class="fixed-bottom">
      <via-iphonex-bottom-safe>
          <view class="bottom-center">
              <view>以上是底部安全范围</view>
          </view>
      </via-iphonex-bottom-safe>
  </view>`,
      color:` <view class="fixed-bottom">
      <view>以上是底部安全范围</view>
      <via-iphonex-bottom-safe bg="rgba(10,29,102,0.1)" />
  </view>`,
    }
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  


  handleclick(e){
    const { type } = e.currentTarget.dataset
    this.setData({type})
  },
});