import datepicker from"../via-date-picker-cell/behavior";Component({behaviors:[datepicker],options:{multipleSlots:!0},externalClasses:[],properties:{rangeTitle:{type:Array,value:null},noActiveColor:{type:String,value:"#323232"}},data:{curenIndex:0,selectPickerText:null,rangeValue:null,confirmVal:null},observers:{value(e){e&&Array.isArray(e)&&(this._initValue=e)}},ready(){this.$dateCell=this.selectComponent("#date-picker-cell-id")},methods:{show(){wx.nextTick((()=>{this.$pop.show(),this.rangeInitRender()}))},hide(){this.clearRange(),this.$pop.hide()},rangeInitRender(){const{curenIndex:e}=this.data;if(Array.isArray(this._initValue)&&this._initValue.length>0){const{pickerText:t,pickerValue:a}=this.getSelectPicker();this.setData({selectPickerText:t,rangeValue:this._initValue,confirmVal:a}),this.$dateCell.render(this._initValue[e])}else this.$dateCell.render()},handleSelectDate(e){const{curenIndex:t,rangeValue:a}=this.data,{index:i}=e.currentTarget.dataset;t!=i&&this.setData({curenIndex:i},(()=>{this.$dateCell.render(a[i])}))},handleDateChange(e){const{curenIndex:t,value:a}=this.data,{value:i,selectPickerText:r,flag:l}=e.detail;l?this.setData({[`selectPickerText[${t}]`]:r,[`rangeValue[${t}]`]:this.getArrayVal(i),[`confirmVal[${t}]`]:i},(()=>{this.triggerEvent("onChange",{value:this.data.confirmVal})})):this.setData({[`selectPickerText[${t}]`]:r,[`rangeValue[${t}]`]:this.getArrayVal(i),[`confirmVal[${t}]`]:i})},getArrayVal(e){const{dateValFormatChart:t,timeValFormatChart:a}=this.properties,[i,r]=e.split(" ");return[...i.split(t),...r?r.split(a):[]]},getSelectPicker(e){try{if(e&&Array.isArray(e)&&e.length>0){const{dateTextFormatChart:t,dateValFormatChart:a,timeTextFormatChart:i,timeValFormatChart:r}=this.properties,l=e[0].slice(0,3),n=e[0].length>3?e[0].slice(3,6):[],s=e[1].slice(0,3),h=e[1].length>3?e[0].slice(3,6):[],c=[`${l.join(t)}${0!=n.length?" ":""}${n.join(i)}`,`${s.join(t)}${0!=h.length?" ":""}${h.join(i)}`];return{pickerText:c,pickerValue:[`${l.join(a)}${0!=n.length?" ":""}${n.join(r)}`,`${s.join(a)}${0!=h.length?" ":""}${h.join(r)}`]}}return{pickerText:"",pickerValue:""}}catch(e){console.error(e)}},handleConfirm(e){const{confirmVal:t}=this.data,{autoClose:a}=this.data;a&&this.hide(),wx.nextTick((()=>{this.triggerEvent("onConfirm",{value:t})}))},clearRange(){this._initValue=null,this.setData({curenIndex:0,selectPickerText:null,rangeValue:null,confirmVal:null})},handleReset(){this.clearRange(),wx.nextTick((()=>{this.$dateCell.render(),this.triggerEvent("onRest","")}))}}});