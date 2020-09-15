import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
`;

export const Name = styled.span`
  color: ${({theme:{colors}})=> colors.primary.lightYellow};
  font-weight: 600;
  font-size: 1.5em;
  line-height: 36px;
  
  /* identical to box height */
  width: 13rem;
  letter-spacing: -0.005em;
`;

export const Price = styled.span`
  color: ${({theme:{colors}})=> colors.primary.lightYellow};
  font-weight: 600;
  font-size: 1.5em;
  line-height: 36px;
  /* identical to box height */
  width: 3rem;
  letter-spacing: -0.005em;
`;