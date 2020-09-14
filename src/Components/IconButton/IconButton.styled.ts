import styled from 'styled-components';
import base from 'Assets/styles/base';
import mixins from 'Assets/styles/mixins';

export const Container = styled.div`

`;

export const IconButton = styled(base.iconButton)`
  background-color:${({theme})=>theme.colors.primary.lightYellow};
  display:flex;
  ${mixins.centralize}
  font-size:1.8rem;
  font-weight:500;
`;