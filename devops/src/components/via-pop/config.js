// 遮罩帧动画
export const maskFrame = {
  show: [{
      opacity: 0,
    },
    {
      opacity: 1,
    },
  ],

  hide: [{
      opacity: 1,
    },
    {
      opacity: 0,
    },
  ]

}
/**
 * 中间弹窗帧动画
 */
export const centerFrame = {

  show: [{
      scale: [0, 0],
      easing: 'ease-in-out'
    },
    {
      scale: [1, 1],
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      scale: [1, 1],
      easing: 'ease-in-out'
    },
    {
      scale: [0.0],
      easing: 'ease-in-out'
    },
  ]

}

/**
 * 顶部弹窗帧动画
 */
export const topFrame = {

  show: [{
      translateY: '-100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateY: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      translateY: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateY: '-100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ]

}


/**
 * 底部弹窗帧动画
 */
export const bottomFrame = {

  show: [{
      translateY: '100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateY: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      translateY: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateY: '100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ]

}


/**
 * 左侧弹窗帧动画
 */
export const leftFrame = {

  show: [{
      translateX: '-100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateX: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      translateX: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateX: '-100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ]

}


/**
 * 左侧弹窗帧动画
 */
export const rightFrame = {

  show: [{
      translateX: '100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateX: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      translateX: '0',
      opacity: 1,
      easing: 'ease-in-out'
    },
    {
      translateX: '100%',
      opacity: 1,
      easing: 'ease-in-out'
    },
  ]

}
