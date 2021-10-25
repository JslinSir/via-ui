module.exports = {
    title: 'Via UI',
    description: '一套精美，内容丰富的小程序原生组件库',
    themeConfig: {
      logo: '/logo.jpg',
      nav: [
        { text: '首页', link: '/' },
        { text: '入门', link: '/guide/' },
        { text: '组件', link: '/base/Button/' },
        { text: 'GitHub', link: 'https://github.com/JslinSir/via-ui'},
      ],
      sidebar: [
        {
          title: '基础',    
          collapsable: false,
          children: [
            '/base/Button/',
            '/base/Icon/'
          ]
        },
        {
          title: '视图',
          collapsable: false,
          children: [
            '/view/Loading/',
            '/view/LoadingMore/',
            '/view/Image/',
            '/view/Tag/',
            '/view/Timeline/',
            '/view/Status/',
            '/view/CarouselText/',
            '/view/SectionList/',
            '/view/ScrollPullEffect/',
           ],
        },
        {
          title: '布局',
          collapsable: false,
          children: [
            '/layout/Card/',
            '/layout/Cell/',
            '/layout/IphoneX/',
           ],
        },
        {
          title: '表单',
          collapsable: false,
          children: [
            '/form/SearchBar/',
            '/form/Switch/',
            '/form/Radio/',
            '/form/DatePicker/',
            '/form/Calendar/',

           ],
        },
        {
          title: '导航',
          collapsable: false,
          children: [
            '/navigation/Tab/',
            '/navigation/NavTab/',
            '/navigation/Navigation/',
           ],
        },
        {
          title: '操作反馈',
          collapsable: false,
          children: [
            '/feedback/TouchableOpacity/',
            '/feedback/Toast/',
            '/feedback/Message/',
            '/feedback/Alert/',
            '/feedback/Mask/',
            '/feedback/Pop/',
            '/feedback/PopModal/',
            '/feedback/ActionSheet/',
            '/feedback/Collapse/',
           ],
        },
        {
          title: '动画',
          collapsable: false,
          children: [
            '/animotion/Transition/',
            '/animotion/Skeleton/',
            '/animotion/Parabola/',
           ],
        },
        {
          title: '业务',
          collapsable: false,
          children: [
            '/business/AD/',
            '/business/CountDown/',
     
           ],
        }
      ]
    }
  }