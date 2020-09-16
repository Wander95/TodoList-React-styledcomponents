import styled from 'styled-components';
import mixins from 'Assets/styles/mixins';

export const Container = styled.div`
  ${mixins.centralize}

  height:100vh ;
  width:100%;
`;


export const Header = styled.h2`
  font-weight:600;
  font-size:1.9rem;
  letter-spacing:2px;

  color:
  ${({theme})=>
    theme.colors.primary.yellow
  };
`;

export const SummaryContainer = styled.div`
  display:flex;
  justify-content:center;
  margin:2rem 0;
  font-weight:600;

  width:100%;
  color:
  ${({theme})=>
    theme.colors.primary.yellow
  };
  
`;

export const SummaryCount = styled.span`
  width: 55%;
`;

export const SummaryPrice = styled.span`
  width: 15%;
`;


export const Input =styled.input`
  margin:1rem 0;
  padding:.5rem;
  border: 0;
  outline: 0;
  font-weight:600;

  color:
  ${({theme})=>
    theme.colors.primary.lightBlack
  };

  border-radius:
  ${({theme})=>
    theme.borderRadius.light
  };
  
`;