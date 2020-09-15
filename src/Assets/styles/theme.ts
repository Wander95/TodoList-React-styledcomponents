import { DefaultTheme } from 'styled-components'
import colors from './colors';
import fonts from './fonts'

const Theme: DefaultTheme = {
  borderRadius: {
    light:'5px',
    medium:'10px',
    strong:'15px'
  },
  colors,
  fonts
}

export { Theme }