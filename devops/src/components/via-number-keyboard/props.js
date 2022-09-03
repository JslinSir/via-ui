export const NumberKeyboardDefaultProps = {
    title: {
        type: String,
        value: '数字键盘'
    },
    // 键盘 确认按钮文案，为null,则不显示确认按钮
    confirmText: {
        type: String,
        value: null
    },
    //是否开启小数点
    float: {
        type: Boolean,
        value: false
    },
    //是否开启震动 
    vibrate: {
        type: Boolean,
        value: true
    },
    //确认按钮颜色
    confirmBg: {
        type: String,
        value: '#0a1d66'
    },
    // 确认按钮loading状态
    confirmLoading: {
        type: Boolean,
        value: false
    },
    // 确认按钮禁用状态
    configmDisabled: {
        type: Boolean,
        value: false
    },

}