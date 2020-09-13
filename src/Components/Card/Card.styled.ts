import styled from 'styled-components';
import mixins from 'Assets/styles/mixins';

export const Container = styled.div`
  display:flex;
  ${mixins.centralize}

  height:100vh ;
  width:100%;
`;