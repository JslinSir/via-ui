const buildDev = require('./script/dev')
const build = require('./script/build')


// 构建组件包
exports.build = build;

// 开发组件模式
exports.default = buildDev;