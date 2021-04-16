Page({
  data: {
    tabs: [
      {
          name:'首页',
          icon:'home',
          iconSelect:'homefill',
      },
     
      {
          name:'我的',
          icon:'my',
          iconSelect:'myfill',
      }  
   ],
   tabs2: [
    {
        name:'首页',
        icon:'home',
        iconSelect:'homefill',
    },
   
    {
        name:'我的',
        icon:'my',
        iconSelect:'myfill',
        val:''
    }  
 ],
 tabs3: [
  {
      name:'首页',
      icon:'home',
      iconSelect:'homefill',
  },
 
  {
      name:'我的',
      icon:'my',
      iconSelect:'myfill',
      val:'10'
  }  
],
tabs4: [
  {
      name:'首页',
      icon:'/pages/navigation/navTab/icon/icon_tab_home.png',
      iconSelect:'/pages/navigation/navTab/icon/icon_tab_home_selected.png',
  },
 
  {
      name:'我的',
      icon:'/pages/navigation/navTab/icon/icon_tab_account.png',
      iconSelect:'/pages/navigation/navTab/icon/icon_tab_account_selected.png',
      val:'10'
  }  
]
  },
  onLoad(options) {

  },
 
});