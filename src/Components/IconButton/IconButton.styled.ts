import styled from 'styled-components';
import base from 'Assets/styles/base';
import mixins from 'Assets/styles/mixins';


export const Container = styled.div`

`;

export const IconButton = styled(base.iconButton)`
  margin:auto;
  ${mixins.centralize}
  font-size:1.8rem;
  font-weight:500;
  margin-top:2rem;

  padding:1.5rem;
  cursor:pointer;
`;