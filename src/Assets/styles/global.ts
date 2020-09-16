import { createGlobalStyle } from 'styled-components';
import font from './fonts';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,800;1,300;1,400;1,800&display=swap');

  body{
    ${font.poppins}
  }

  input{
    outline:none;
  }
`;

export default GlobalStyles