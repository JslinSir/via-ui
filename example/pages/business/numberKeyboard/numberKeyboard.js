Page({
  data: {
    value:'',
    confirmText:'',
    float:false,
    confirmBg:'',
    loading:false,
    title:'数字键盘'
  },
  onLoad(options) {

    this._val = []

  },

  handleInputClick(){
    this.setData({float:false,confirmText:null},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
    
  },

  handleInputClickFloat(){
    this.setData({float:true},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
  },

  handleInputClickConfirm(){
    this.setData({confirmText:'确定',confirmBg:'',loading:false,configmDisabled:false},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
  },

  handleInputClickConfirmColor(){
    this.setData({confirmText:'确定',confirmBg:'#07c160',loading:false,configmDisabled:false},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
  },

  handleInputClickConfirmColorLoading(){
    this.setData({confirmText:'确定',confirmBg:'#07c160',loading:true,configmDisabled:false},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
  },

  handleInputClickConfirmDisabled(){
    this.setData({confirmText:'确定',confirmBg:'#07c160',configmDisabled:true},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
  },

  handleInputClickSetTitle(){
    console.log('设置标题')
    this.setData({float:false,confirmText:null,title:'安全键盘'},()=>{
      this.selectComponent('#via-number-keyboard').show()
    })
 
  },

  handleInput(e){
    this._val.push(e.detail)
    this.setData({value:this._val.join('')})
  },

  handleDelete(){
    this._val.pop()
    this.setData({value:this._val.join('')})
  },

  handleConfirm(){
    wx.showToast({
      title: '点击了确认',
      icon:'none'
    })
  },
 
});