export const WatermarkDefaultProps = {
    // 水印文字 建议文字最多为8个汉字
    markStr: {
        type: String,
        value: ''
    },

    // 水印字体大小  rpx单位
    fontSize: {
        type: Number,
        value: 32
    },

    // 间隔宽度 rpx
    spaceWidth: {
        type: Number,
        value: 300
    },
    // 间隔高度 
    spaceHeight: {
        type: Number,
        value: 180
    },
}