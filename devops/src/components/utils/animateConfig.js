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
      scale3d: [0, 0, 0],
      opacity: 0,
      easing: 'ease'
    },
    {
      scale3d: [1, 1, 1],
      opacity: 1,
      easing: 'ease'
    },
  ],

  hide: [{
      scale3d: [1, 1, 1],
      opacity: 1,
      easing: 'ease'
    },
    {
      scale3d: [0, 0, 0],
      opacity: 0,
      easing: 'ease'
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
      translate3d: [0, '100%', 0],
      easing: 'ease'
    },
    {
      translate3d: [0, '0', 0],
      easing: 'ease'
    },
  ],

  hide: [{
      translate3d: [0, 0, 0],
      easing: 'ease'
    },
    {
      translate3d: [0, '100%', 0],
      easing: 'ease'
    },
  ]

}


/**
 * 左侧弹窗帧动画
 */
export const leftFrame = {

  show: [{
      translate3d: ['-100%', 0, 0],
      easing: 'ease'
    },
    {
      translate3d: [0, 0, 0],
      easing: 'ease'
    },
  ],

  hide: [{
      translate3d: [0, 0, 0],
      opacity: 1,
      easing: 'ease'
    },
    {
      translate3d: ['-100%', 0, 0],
      opacity: 1,
      easing: 'ease'
    },
  ]

}


/**
 * 左侧弹窗帧动画
 */
export const rightFrame = {

  show: [{
      translate3d: ['100%', 0, 0],
      opacity: 1,
      easing: 'ease'
    },
    {
      translate3d: [0, 0, 0],
      opacity: 1,
      easing: 'ease-in-out'
    },
  ],

  hide: [{
      translate3d: [0, 0, 0],
      opacity: 1,
      easing: 'ease'
    },
    {
      translate3d: ['100%', 0, 0],
      opacity: 1,
      easing: 'ease'
    },
  ]

}
