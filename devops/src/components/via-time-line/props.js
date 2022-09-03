export const TimeLineDefaultProps = {
    current: { // 指定当前节点  从 0  开始记数
        type: Number,
        value: 0,
    },
    dataSource: {
        type: Array,
        value: [],
    },
    color: {
        type: String,
        value: '#dadada',
    },
    activeColor: {
        type: String,
        value: '#FF574C',
    },
    activeBorderColor: {  //小程序的  border-color 不支持rgba 
        type: String,
        value: '#FFDAD7',
    },
}