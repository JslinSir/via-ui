 const buildDev = require('./gulpTask/dev')
 const build = require('./gulpTask/build')
 

// 构建组件包
exports.build = build;

// 开发组件模式
exports.default = buildDev;