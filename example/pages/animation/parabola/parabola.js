

import { getRect } from '../../../components/utils/noderef'

Page({
  data: {
    fruit: [
      "🍏",
      "🍎",
      "🍐",
      "🍊",
      "🍋",
      "🍌",
      "🍉",
      "🍇",
      "🍓",
      "🍈",
      "🍒",
      "🍑",
      "🍍",

    ],
    styleX: '',
    styleY: '',
    curent:'',
    curentIndex:0,
    config:[{
      title:'右抛物线',
      type:'right'
    },{
      title:'左抛物线',
      type:'left'
    }],
  },


  // 获取结束节点的位置
  async getEndRef() {
    const result = await getRect(this, '#cardID')
    return result
  },

  //  获取开始节点位置
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