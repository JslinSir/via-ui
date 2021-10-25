
/**
 * 帧动画 执行 异步方法
 * @param {*} ctx  上下文
 * @param {*} select 选择的元素
 * @param {*} frames 动画帧元素
 * @param {*} time   动画执行时间
 */
const runAnimotionFrame = (ctx,select,frames,time=300)=>{
  return new Promise((revose)=>{
    ctx.animate(select, frames, time, ()=> revose())
  })
}

/**
 * 帧动画清楚
 * @param {*} ctx 上下文
 * @param {*} select 选择的元素
 * @param {*} options 要清楚的动画帧元素
 */
const clearAnimotion = (ctx,select,options) =>{
return new Promise( revose => ctx.clearAnimation(select, options,()=> revose()))
}


export {
  runAnimotionFrame,
  clearAnimotion
}

export default { runAnimotionFrame ,clearAnimotion}