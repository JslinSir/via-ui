const runAnimotionFrame=(n,o,i,e=300)=>new Promise((r=>{n.animate(o,i,e,(()=>r()))})),clearAnimotion=(n,o,i)=>new Promise((e=>n.clearAnimation(o,i,(()=>e()))));export{runAnimotionFrame,clearAnimotion};export default{runAnimotionFrame:runAnimotionFrame,clearAnimotion:clearAnimotion};