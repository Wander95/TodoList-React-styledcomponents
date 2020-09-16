import styled from 'styled-components';
import mixins from 'Assets/styles/mixins';

export const Container = styled.div`
  background-color: 
  ${({theme:{colors}})=> 
    colors.primary.lightBlack
  };
  
  border-radius:
  ${({theme})=>
    theme.borderRadius.light
  };

  height:80%;
  width: 20rem;

  ${mixins.centralize}
  flex-direction:column;
`;