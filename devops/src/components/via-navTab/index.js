
Component({
  properties: {
    tab: { //[{name,  key, icon, iconSelect, val}]]  若开启小红点，val 为空，如果val有值，显示消息数
      type: Array,
      value: [],
    },
    type:{ //icon | img
      type: String,
      value: 'icon',
    },
    isNav:{
      type: Boolean,
      value: true,
    },
    height:{
      type: Number,
      value: 100,
    },
    bgColor:{
      type: String,
      value: 'rgba(255, 255, 255, 0.97)',
    },
    curentTab:{
      type: Number,
      value: 0,
      observer:'changeSetTab'
    },  
    animotion:{
      type: Boolean,
      value: true,
    },
    iconSize:{
      type: Number,
      value: 48, 
    },
    color:{
      type: String,
      value: '#999',
    },
    activeColor:{
      type: String,
      value: '#0a1d66',
    },
    fontSize:{
      type: Number,
      value: 20,
    },
    fontColor:{
      type: String,
      value: '#999',
    },
    fontSelectColor:{
      type: String,
      value: '#000',
    },
  }, 
  data: {
    tabIndex:0,
  },
  attached(){
    this.setData({tabIndex:this.properties.curentTab?this.properties.curentTab:0})
  },

  methods: {
    handleTabClick(e){
      const { tabIndex } = this.data
      const { currentTarget:{ dataset:{ index,name } } } = e
       tabIndex !=index && this.setData({tabIndex:index},()=>{
        this.triggerEvent('onChange',{name,index })
      })
    },
    changeSetTab(){
      const { curentTab } = this.properties
      this.setData({tabIndex:curentTab?curentTab:0})
    }
  }
})