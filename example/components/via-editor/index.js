Component({properties:{placeholder:{type:String,value:""},colors:{type:Array,value:["#323232","#fe473c","#26a4ec","#1bb72e","#c73277","#fba72b"]},bottomSlot:{type:Boolean,value:!1},content:{type:String,value:null},imageUploadList:{type:Array,value:[]}},data:{formats:{},isIOS:!1,keyboardHeight:0,showDrawPanel:!1,bottomBtnShow:!1,weChatSdkCanUse:!0,insertImageList:[]},attached(){if("function"!=typeof wx.onKeyboardHeightChange)return wx.showToast({title:"客户端版本过低，编辑器无法使用，请更新最新客户端",icon:"none",duration:2e3}),void this.setData({weChatSdkCanUse:!1});const t="ios"===wx.getSystemInfoSync().platform;this.setData({isIOS:t}),this.updatePosition(0);let e=0;wx.onKeyboardHeightChange((t=>{if(t.height===e)return;const i=t.height>0?1e3*t.duration:0;e=t.height,setTimeout((()=>{wx.pageScrollTo({scrollTop:0,success:()=>{this.updatePosition(e),this.editorCtx.scrollIntoView()}})}),i)})),this.clipImage=this.selectComponent("#clipImage")},methods:{onStatusChange(t){const e=t.detail;this.setData({formats:e})},onEditorReady(){wx.showLoading(),this.createSelectorQuery().select("#editor").context((t=>{this.editorCtx=t.context;const{content:e,imageUploadList:i}=this.properties;e&&e.length?(this.editorCtx.setContents({html:`${e}`,complete:()=>wx.hideLoading()}),setTimeout((()=>{this.setData({bottomBtnShow:!0})}),200)):wx.hideLoading(),i&&i.length&&this.setData({insertImageList:i})})).exec()},updatePosition(t){const{windowHeight:e}=wx.getSystemInfoSync();let i=t>0?e-t-60:e-60;this.setData({editorHeight:i,keyboardHeight:t,bottomBtnShow:!(t>0)})},toggleDrawPanel(){this.setData({showDrawPanel:!this.data.showDrawPanel})},format(t){let{name:e,value:i}=t.target.dataset;e&&this.editorCtx.format(e,i)},insertImage(){wx.showLoading({title:"相册初始化中"}),this.editorCtx.blur({success:()=>{wx.hideLoading(),setTimeout((()=>{wx.chooseImage({sizeType:["compressed"],success:t=>{const e=t.tempFilePaths,i=t.tempFiles,{insertImageList:s}=this.data;let o=[];(e||[]).map((t=>{const a="data:image/png;base64,"+wx.arrayBufferToBase64(wx.getFileSystemManager().readFileSync(t));this.editorCtx.insertImage({src:a,data:{id:o.length,role:"god",keyImagePath:t},width:"100%",success:()=>{const a={path:t,size:i[o.length].size,id:o.length};o.push(a),o.length===e.length&&this.setData({insertImageList:[...s,...o]})}})}))}})}),200)}})},handleBlur:function(){this.setData({bottomBtnShow:!0});const{insertImageList:t=[]}=this.data;this.getEditorContent().then((e=>{const{html:i}=e,s=(t||[]).filter((t=>-1!==i.indexOf(t.path)));this.triggerEvent("blur",{...e,imageList:s})}))},handleInput(t){const{keyboardHeight:e}=this.data;this.editorCtx.scrollIntoView(),this.setData({showDrawPanel:!1},(()=>{this.updatePosition(e)})),this.triggerEvent("input")},handleEditorFocus(){this.editorCtx.scrollIntoView(),this.setData({bottomBtnShow:!1})},saveEditor:function(){const{insertImageList:t=[]}=this.data;this.getEditorContent().then((e=>{const{html:i}=e,s=(t||[]).filter((t=>-1!==i.indexOf(t.path)));this.triggerEvent("save",{...e,imageList:s})}))},cancel:function(){this.triggerEvent("cancel","")},getEditorContent(){return new Promise(((t,e)=>{this.editorCtx.getContents({success:e=>{const{html:i="",text:s=""}=e;let o=i;-1!==i.indexOf("wx:nodeid")&&(o=i.replace(/ wx:nodeid="\d+"/g,""));const a=s.replace(/↵/g,"").replace(/[\r\n]/g,"");t({html:o,text:a})},fail:t=>{e(t)}})}))}}});