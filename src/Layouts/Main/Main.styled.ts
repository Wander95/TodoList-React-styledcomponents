import styled from 'styled-components';
import mixins from 'Assets/styles/mixins';
import base from 'Assets/styles/base';

interface IIpunt {
  width?:string
  padding?:string
  marginRight?:string
}

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


export const Input = styled.input<IIpunt>`
  display:inline-block;

  width:
  ${({width})=>
    width ? width : '5rem'
  };

  
  
  margin:1rem 0;
  margin-right: 
  ${({marginRight})=>
    marginRight ? marginRight : '0'
  };


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


export const CardListContainer = styled.div`
  padding:1rem;
  max-height:9rem;
  overflow:scroll;

  &::-webkit-scrollbar{
    background: transparent;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb{
    
    background-color: #000000;
    width: 2px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    background: transparent;
  }

  overflow-x: hidden; //horizontal
`;

export const FormContainer = styled.div`

`;

