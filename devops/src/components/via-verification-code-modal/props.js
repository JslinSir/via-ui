export const VerificationCodeModalDefaultProps = {
    // 倒计时时长 单位 s 默认 60
    time: {
        type: Number,
        value: 60
    },
    title: {
        type: String,
        value: '请填写手机短信验证码'
    },
    phone: {
        type: String,
        value: ''
    },
    // 验证码长度,默认6位
    msglen: {
        type: Number | String,
        value: 6
    },
}