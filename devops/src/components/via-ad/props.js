export const AdDefaultProps = {
    type: {
        type: String,
        value: 'modal' //modal  | full
    },
    visible: {
        type: Boolean,
        value: false
    },
    clickClose: {
        type: Boolean,
        value: true
    },
    iconName: {
        type: String,
        value: 'closeRoundIcon'
    },
    // 倒计时位置
    actionPosition: {
        type: String,
        value: 'bottom' //bottom  | top
    },
    // 广告存活时间
    duration: {
        type: Number,
        value: 4
    },
}