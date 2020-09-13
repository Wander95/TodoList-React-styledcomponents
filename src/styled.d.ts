import { CSSProp } from 'styled-components';
import { Theme as theme } from './Assets/styles/theme';

declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends theme{}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}