
import { svgToBase64 } from '../utils/base'


export const selectSvg = (color = '#ddd') => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 1024 1024" 
   width="100%" 
   height="100%" 
   >
   <path d="M438.4 819.2c-6.4 0-12.8-3.2-16-6.4l-284.8-233.6c-9.6-9.6-12.8-28.8-3.2-38.4 9.6-9.6 28.8-12.8 38.4-3.2l262.4 217.6L848 304c9.6-9.6 28.8-9.6 38.4-3.2 9.6 9.6 9.6 28.8 3.2 38.4L457.6 809.6c-6.4 6.4-12.8 9.6-19.2 9.6z" 
    fill="${color}" />
    </svg>`
  return svgToBase64(svgXml)
}

export default selectSvg




