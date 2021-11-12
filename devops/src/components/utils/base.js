


/**
    * 计算分辨率
    * 以6s为基础
    * 设计稿 宽 750rpx 375px 
    */
export const caculateRatio = () => {
    const { screenWidth } = wx.getSystemInfoSync()
    const rate = screenWidth / 375
    return rate
}


/**
 *  计算当前设备 rpx 转 px 值
 * @param {*} pxVal 
 * @returns 
 */
export const rpxToPx = (pxVal) => {
    const _6sVal = pxVal / 2
    const rate = caculateRatio()
    const devicePxVal = Math.round(_6sVal * rate)  
    return devicePxVal 
}