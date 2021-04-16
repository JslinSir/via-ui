
Component({
  externalClasses: ["class-radio-style", "class-radio-select-style"],
  properties: {
    selectData:{
      type: Array,
      value: [],
     },
   curentId:{
    type: String,
    value: '',
   },
   type:{
    type: String,
    value: 'default',
   },
   radio:{
    type: Boolean,
    value: true,
   },
   fontSize:{
    type: Number,
    value: 28,
   },
   fontColor:{
    type: String,
    value: '#323232',
   },
   radius:{
    type: Number,
    value: 10,
   },
   bgColor:{
    type: String,
    value: '#f6f6f6',
   },
   activeColor:{
    type: String,
    value: '#04BE02',
   },
   radioSize:{
    type: Number,
    value: 56,
   },
   width:{
    type: Number,
    value: 120,
   },
   height:{
    type: Number,
    value: 60,
   }

  },
  attached(){
    const { curentId,selectData } = this.properties
    try{
      if(curentId){
        this.setData({selectId:curentId})
     }else{
       this.setData({selectId:selectData[0].id})
     }
    }
    catch(e){
      console.error(e,`\n 组件error 信息：\n properties 的 selectData 传入类型 如下：\n[{name:'开启',id:'1',name:'不开启',id:'0'}]`)
    }
    

  },
  data: {

  },
  methods: {
    handleSwitchChange(e){
      const { selectId } = this.data
      const { currentTarget:{ dataset:{ items } } } = e
      selectId!==items.id && this.setData({selectId:items.id},()=>{
        this.triggerEvent("onChange", items);
      })
    },
    handleRadioSwitch(){
      const { radio } = this.data
      this.setData({radio:!radio},()=>{
        this.triggerEvent("onChange", !radio);
      })
    },
  }
})