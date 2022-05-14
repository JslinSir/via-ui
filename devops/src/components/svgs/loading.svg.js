import { svgToBase64 } from '../utils/base'

export const loading = (color = '#ddd') => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%" 
    viewBox="24 24 48 48">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" from="0" to="360" dur="1400ms"></animateTransform>
    <circle cx="48" cy="48" r="20" fill="none" stroke="${color}" stroke-width="4" transform="translate\(0,0\)">
    <animate attributeName="stroke-dasharray" values="1px, 200px;100px, 200px;100px, 200px" dur="1400ms" repeatCount="indefinite"></animate>
    <animate attributeName="stroke-dashoffset" values="0px;-15px;-125px" dur="1400ms" repeatCount="indefinite"></animate>
    </circle>
    </svg>`
  return svgToBase64(svgXml)
}

export default loading
