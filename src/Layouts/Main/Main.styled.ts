import styled from 'styled-components';
import mixins from 'Assets/styles/mixins';

export const Container = styled.div`
  ${mixins.centralize}

  height:100vh ;
  width:100%;
`;


export const Header = styled.h2`
  font-weight:500;
  font-size:1.9rem;

  color:${({theme})=>theme.colors.primary.yellow};
`;