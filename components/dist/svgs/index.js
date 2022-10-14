import { svgToBase64 } from '../utils/base'

import { check as checkIcon } from './check.svg'

CONFIGS = {
    check:checkIcon
}

const getIconStr = (icon,color) => CONFIGS[icon](color)

export const getSvgs = (...args) => svgToBase64(getIconStr(...args))

 

