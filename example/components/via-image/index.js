Component({externalClasses:["class-image"],properties:{style:{type:String,value:""},src:{type:String,value:""},mode:{type:String,value:"scaleToFill"},webp:{type:Boolean,value:!1},lazyLoad:{type:Boolean,value:!1},showMenuByLongpress:{type:Boolean,value:!1},preView:{type:Boolean,value:!1},errorImg:{type:String,value:"../via-status/img/imgError.png"},errorImgSize:{type:Number,value:100},loadingImg:{type:String,value:""},loadingImgSize:{type:Number,value:""}},data:{loading:!0,error:!1},attached(){},methods:{handleImgLoadError(e){const t=e.detail;this.setData({error:!0,loading:!1}),this.triggerEvent("onError",t)},handleLoadSuccess(e){const t=e.detail;this.setData({error:!1,loading:!1}),this.triggerEvent("onSuccess",t)},handlePreview(){this.data.src.startsWith("http")&&this.data.preView&&wx.previewImage({current:"0",urls:[this.data.src]})}}});