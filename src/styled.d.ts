import { CSSProp } from 'styled-components';
import { Theme as theme } from './Assets/styles/theme';

type Theme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends theme{}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}