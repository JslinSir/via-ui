Component({options:{multipleSlots:!0},data:{title:null,maskClosable:!1,content:null,contentIsArray:!1,mask:!0,alertConfirm:!1,cannel:!0,ok:!0,cannelText:"取消",okColor:"#FF5100",okText:"确认",opacity:0,toastIcon:"check",style:null},methods:{_show(t){return this.setData({cannel:!1,ok:!0,mask:!0,alertConfirm:!0,title:null,...t,contentIsArray:Array.isArray(t.content?t.content:"")},(()=>{setTimeout((()=>this.setData({opacity:1})),10)})),new Promise((t=>{this.proxy={status:null},Object.defineProperty(this.proxy,"status",{set(s){t(s)}})}))},_close(t){this.setData({opacity:0},(()=>{setTimeout((()=>{this.setData({mask:!1,alertConfirm:!1},(()=>{this.proxy.status=t}))}),200)}))},cannel(){this._close(!1)},ok(){this._close(!0)},async alert(t){return await this._show(t)},async confirm(t){return await this._show({cannel:!0,...t})}}});