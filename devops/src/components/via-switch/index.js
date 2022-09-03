
const leftFram = [
  { opacity: 1, translateX: '-100%',backgroundColor:'#fff',color:'#F05022'},
  { opacity: 1, translateX: 0,  backgroundColor:'#fff',color:'#F05022'},
]
const rightFram = [
  { opacity: 1, translateX: '100%', backgroundColor:'#fff',color:'#F05022' },
  { opacity: 1, translateX: 0, backgroundColor:'#fff' ,color:'#F05022'},
]
import { SwitchDefaultProps } from './props'
Component({
 
  properties: SwitchDefaultProps,
  attached(){

    this.curentIndex = 0

    const { selectData } = this.properties
    this.setData({selectId:selectData[0].id})

  },

observers:{

  curentId(v){
    if(v){
      this.setData({selectId:v}) 
    }else{
      const { selectData } = this.properties
      this.setData({selectId:selectData[0].id})
    }
  },
  disabled(v){
    this.setData({_disabled:v})
  },

},

  data: {
    _disabled:false
  },
  methods: {
    handleSwitchChange(e){


      const { selectId } = this.data
      const { currentTarget:{ dataset:{ items,index } } } = e

      const { _disabled } = this.data

      if(_disabled){

        return false

      }
      if(this.properties.control){

        this.triggerEvent('onClick',items)

        return false

      }
  
      this.curentIndex = index
      selectId!=items.id && this.runAnimotion(this,index,()=>{
       this.setData({selectId:items.id},()=>{
          this.triggerEvent("onChange", items);
        })
      })
  
    },

    handleRadioSwitch(){
      const { radio } = this.data
      this.setData({radio:!radio},()=>{
        this.triggerEvent("onChange", !radio);
      })
    },

    runAnimotion (ctx,index,cb){
      const { selectId ,selectData } = this.data
      const clickIndex = selectData.findIndex(( { id } )=> id == selectId)
      const fram = clickIndex>this.curentIndex?rightFram:leftFram
      ctx.animate(`#switchitemid${index}`,fram , 300, function () {
        ctx.clearAnimation(`#switchitemid${index}`, function () { })
        typeof cb === 'function' && cb()
      }.bind(ctx))
      
    }
   
  }
})