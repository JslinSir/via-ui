

// 获取节点信息
function getRect(ctx,selector, all = false) {
    return new Promise((resolve, reject) => {
      const query = ctx.createSelectorQuery();
      const type = all ? query.selectAll(selector) : query.select(selector);
      type.boundingClientRect((res) => {
        if (!res) return reject('找不到元素');
        resolve(res);
      }).exec();
    });
  }
  
export {
    getRect,

}