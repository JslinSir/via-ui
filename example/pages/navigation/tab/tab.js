Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs1:[{
      title:'前端',
      key:'qianduan'
     },{
       title:'后端',
       key:'houduan'
     },{
       title:'测试',
       key:'ceshi'
     }],
    tabs2:[{
     title:'前端',
     key:'qianduan'
    },{
      title:'后端',
      key:'houduan'
    },{
      title:'测试',
      key:'ceshi'
    },
    {
      title:'运维',
      key:'yunwei'
    },
    {
      title:'产品',
      key:'chanpin'
    },
    {
      title:'设计',
      key:'sheji'
    },
    {
      title:'经理',
      key:'jingl'
    }]
  },

  

  handleChange(e){
    console.log('tab 切换了',e)

  },
});
