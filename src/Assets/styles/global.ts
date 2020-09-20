import { createGlobalStyle } from 'styled-components';
import font from './fonts';

const GlobalStyles = createGlobalStyle`

  body{
    ${font.poppins}
  }

  input{
    outline:none;
  }

  button{
    outline:none;
  }
`;

export default GlobalStyles