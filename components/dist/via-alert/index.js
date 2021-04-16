/**
 * 模态对话框
 * @description: 支持alert ， confirm  
 */
 Component({
   options: {
     multipleSlots: true
   },
 
   /**
    * 组件的初始数据
    */
   data: {
     // 标题
     title: null,
     // mask点击是否可以关闭
     maskClosable: false,
     // 内容
     content: null,
     contentIsArray: false,
     mask: true,
     alertConfirm: false,
     cannel: true,
     ok: true,
     // 取消按钮文字
     cannelText: '取消',
     okColor:'#FF5100',
     // 确认按钮文字
     okText: '确认',
     opacity: 0,
     // 图标
     toastIcon: 'check',
     style: null,
     
   },
 
   /**
    * 组件的方法列表
    */
   methods: {
     _show(config) {
       this.setData({
         cannel: false, 
         ok: true, 
         mask: true, 
         alertConfirm: true,
         title: null,
         ...config,
         contentIsArray: Array.isArray(config.content? config.content: '')
       }, () => {
         setTimeout(() => this.setData({opacity: 1}), 10)
       })
       return new Promise((resolve) => {
         this.proxy = { status: null };
         Object.defineProperty(this.proxy, 'status', {
           set(value) { //更新值的时候会触发
             resolve(value)
           }
         });
       })
     },
     _close(status) {
       this.setData({ opacity: 0}, () => {
         setTimeout(() => {
           this.setData({mask: false, alertConfirm: false}, () => {
             this.proxy.status = status
           })
         }, 200)
         // this.triggerEvent('change', {status})
       })
     },
     /**
      * 取消
      */
     cannel() {
       this._close(false)
     },
     /**
      * 确认
      */
     ok() {
       this._close(true)
     },
     async alert(config){
       return await this._show(config)
     },
     async confirm(config){
       return await this._show({cannel: true, ...config})
     },
 
   }
 })
 