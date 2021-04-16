
Component({
  externalClasses: ["class-tab","class-active-tab","class-line"],
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: { //title,key
      type: Array,
      value: []
    },
    selectColor:{
      type: String,
      value: ""
    },
    activeTab:{ //当前激活Tab索引
      type: Number,
      value: 0
    },
  },
  observers: {
    activeTab(index) {
      this.setData({curentIndex:index})
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    curentIndex: 0,
    transformX:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(e) {
      const { tabs, curentIndex } = this.data
      const { index } = e.currentTarget.dataset
      if (curentIndex != index) {
        this.setData({
          curentIndex: index
        }, () => {
          this.data.tabs.length>5 && this.queryMultipleNodes()
          this.triggerEvent("onChange", {...tabs[index],index})
        })
      }

    },


    queryMultipleNodes() {
      this.getRect('.mp-tab-item', true)
        .then((res) => {
          this.queryScrollNode(res);
        });
    },
    queryScrollNode(res, type = 'width') {
      const { curentIndex } = this.data
      const curentSelectIndex = res.find(({ dataset: { index } }) => index == curentIndex).dataset.index
      const currentRect = res[curentSelectIndex];
      this.getRect('.mp-scroll-view-box').then(_ => {
        const scrollWidth = _[type];
        let transformDistance = res
          .slice(0, curentSelectIndex)
          .reduce((prev, curr) => prev + curr[type], 0);
        transformDistance += (currentRect[type] - scrollWidth) / 2;
        if (type === 'width') {
          this.setData({
            transformX: transformDistance,
          });
        }
      });
    },
    getRect(selector, all = false) {
      return new Promise((resolve, reject) => {
        const query = wx.createSelectorQuery().in(this);
        const type = all ? query.selectAll(selector) : query.select(selector);
        type.boundingClientRect((res) => {
          if (!res) return reject('找不到元素');
          resolve(res);
        }).exec();
      });
    },

  }
})