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
  margin-top:2rem;

  width:100%;
  color:
  ${({theme})=>
    theme.colors.primary.yellow
  };
`;

export const SummaryCount = styled.span`
  width: 60%;
`;

export const SummaryPrice = styled.span`
  width: 20%;
`;