Component({externalClasses:["class-pop-bottom-view","class-pop-center-view","class-header-title"],options:{multipleSlots:!0},properties:{title:String,maskClose:{type:Boolean,value:!0},height:{type:Number,value:750},hasCloseIcon:{type:Boolean,value:!0},direction:{type:String,value:"bottom"},confirm:{type:Boolean,value:!1},cancelTex:{type:String,value:"取消"},confirmTex:{type:String,value:"确认"},texSize:{type:Number,value:32},cancelColor:{type:String,value:"#333"},confirmColor:{type:String,value:"#0a1d66"},confirmDisabled:{type:Boolean,value:!1}},data:{confirmDisabledStatus:!1},observers:{confirmDisabled(e){this.setData({confirmDisabledStatus:e})}},created(){this.$pop=this.selectComponent("#popid")},methods:{show(){this.$pop.show()},hide(){this.$pop.hide(),this.triggerEvent("onClose","")},handleConfirm(){this.triggerEvent("onConfirm","")}}});