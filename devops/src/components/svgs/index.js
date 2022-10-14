import { svgToBase64 } from '../utils/base'
import { checkIcon } from './check.svg'
import { closeIcon } from './close.svg'
import { arrowIcon,arrowRightIcon,arrowDownIcon,arrowLeftIcon,arrowUpIcon } from './arrow.svg'
import { deleteIcon } from './delete.svg'
import { editIcon } from './edit.svg'
import { settingIcon } from './setting.svg'
import { questionIcon } from './question.svg'
import { scanIcon } from './scan.svg'
import { moreIcon } from './more.svg'
import { qrCodeIcon } from './qrcode.svg'
import { searchIcon } from './search.svg'
import { locationIcon } from './location.svg'
import { noticeIcon } from './notice.svg'
import { addIcon } from './add.svg'
import { waringIcon } from './waring.svg'

const CONFIGS = {
  checkIcon,
  closeIcon,
  arrowIcon,
  arrowDownIcon,
  arrowLeftIcon,
  arrowUpIcon,
  arrowRightIcon,
  deleteIcon,
  editIcon,
  settingIcon,
  questionIcon,
  scanIcon,
  moreIcon,
  qrCodeIcon,
  searchIcon,
  locationIcon,
  noticeIcon,
  addIcon,
  waringIcon,
}

const getIconStr = (icon,color) => CONFIGS[icon] ? CONFIGS[icon](color) : console.error('Via  UI 不存在',icon,'的icon')

export const getSvg = (...args) => svgToBase64(getIconStr(...args))


 

