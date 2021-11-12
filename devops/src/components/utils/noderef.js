

/**
 *  获取节点信息
 * @param {*} ctx 
 * @param {*} selector 
 * @param {*} all 
 * @returns 
 */
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

  /**
   * 获取节点的相关信息。需要获取的字段在fields中指定。返回值是 nodesRef
   * @param {*} ctx 
   * @param {*} selector 
   * @param {*} params 
   * @returns 
   */
  function getFields(ctx,selector,params={node:true,size:true}){
    return new Promise((resolve, reject) => {
      const query = ctx.createSelectorQuery()
      query
      .select(selector)
      .fields(params)
      .exec( res =>  !res[0] ?  reject('找不到元素') : resolve(res) )
    });
  }
  
export {
    getRect,
    getFields,
}