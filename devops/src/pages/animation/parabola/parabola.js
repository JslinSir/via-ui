

import { getRect } from '../../../components/utils/noderef'

Page({
  data: {
    fruit: [
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",
      "๐",

    ],
    styleX: '',
    styleY: '',
    curent:'',
    curentIndex:0,
    config:[{
      title:'ๅณๆ็ฉ็บฟ',
      type:'right'
    },{
      title:'ๅทฆๆ็ฉ็บฟ',
      type:'left'
    }],
  },


  // ่ทๅ็ปๆ่็น็ไฝ็ฝฎ
  async getEndRef() {
    const result = await getRect(this, '#cardID')
    return result
  },

  //  ่ทๅๅผๅง่็นไฝ็ฝฎ
  async getStartRef(index) {
    const result = await getRect(this, `#button${index}`)
    return result
  },

  handleSwitch(e){
    const { index } = e.currentTarget.dataset
    this.setData({curentIndex:index})
  },

  async handleClick(e) {
    const { index } = e.currentTarget.dataset
    this.setData({
      curent:this.data.fruit[index] 
    })
    const startRef = await this.getStartRef(index)
    const endRef = await this.getEndRef()
    
    this.selectComponent('#parabolaAnimotion').run({
      x:startRef.left,
      y:startRef.top
    },{
      x:endRef.left,
      y:endRef.top
    })
 

  },







});