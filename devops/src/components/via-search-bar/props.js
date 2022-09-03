export const SearchBarDefaultProps = {
  radius: {
    type: Number,
    value: 40,
  },
  height: {
    type: Number,
    value: 88,
  },
  width: {
    type: Number,
    value: '',
  },
  showSearchIcon: {
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
  placeholderColor: {
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
  carousel: {
    type: Boolean,
    value: false,
  },
  carouselText: {
    type: Array,
    value: [],
  }
}