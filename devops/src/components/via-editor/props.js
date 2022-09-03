export const EditorDefaultProps = {
    placeholder: {
        type: String,
        value: ''
    },
    colors: { //字体颜色
        type: Array,
        value: ['#323232', '#fe473c', '#26a4ec', '#1bb72e', '#c73277', '#fba72b'],
    },
    bottomSlot: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
        value: null,
    },


    imageUploadList: {
        type: Array,
        value: [],
    }
}