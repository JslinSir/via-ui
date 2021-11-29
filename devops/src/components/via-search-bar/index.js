/**
 * SearchBar
 */

 Component({
  externalClasses: ["class-search-text"],
  /**
   * 组件的属性列表
   */
  properties: {
    radius: {
      type: Number,
      value: 40,
    },
    height:{
      type: Number,
      value: 88,
    },
    width:{
      type: Number,
      value: '',
    },
    showSearchIcon:{
      type: Boolean,
      value: true,
    },
    searchText: { //展示右边搜索文案
      type: String,
      value: '搜索',
    },
    maxlength: {
      type: Number,
      value: 140
    },
    
    placeholder: String,
    placeholderColor:{
      type: String,
      value: '#cccccc'
    },
    value: String,
    focus: {
      type: Boolean,
      value: false
    },
    showClear: {
      type: Boolean,
      value: true
    },
    disabled: {
      type: Boolean,
      value: false,
    },
   carousel:{
    type: Boolean,
    value: false,
   },
   carouselText:{
    type: Array,
    value: [],
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    clearIconVisible: false
  },

  timer: null,

  ready() {
    const { showClear } = this.properties;
    const { value } = this.data;

    if (!showClear) {
      return;
    }

    this.setData({
      clearIconVisible: !!value
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput({ detail: { value } }) {
      let { showClear } = this.properties;
      const state = { value };

      if (showClear) {
        state.clearIconVisible = !!value;
      }
      this.triggerEvent("onChange", value);
      this.setData(state);

    
    },

    handleCancel() {
      this.setData({
        value: "",
        clearIconVisible: false
      });
      this.triggerEvent("onChange", '');
      this.triggerEvent("onCancel");
    },

    handleSearch() {
      const { value } = this.data;

      this.triggerEvent("onConfirm", value);
    },

    handleClickSearchText(){
      const { value } = this.data;
      this.triggerEvent("onClickSearchText", value);
    },
    

    handleFocus() {
      const { value } = this.data;

      this._updateClearState(!!value);
      this.triggerEvent("onFocus", value);
    },

    handleBlur() {
      const { value } = this.data;

      this._hideClearIcon();
      this.triggerEvent("onBlur", value);
    },

    handleClear() {
      this.handleCancel();
    },

    _updateClearState(visible) {
      const { showClear } = this.properties;

      if (!showClear) {
        return;
      }

      this.setData({
        clearIconVisible: visible
      });
    },

    _showClearIcon() {
      this._updateClearState(true);
    },

    _hideClearIcon() {
      this._updateClearState(false);
    }
  }
});
