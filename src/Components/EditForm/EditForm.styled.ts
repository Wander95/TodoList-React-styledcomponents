import styled from 'styled-components';
import mixin from 'Assets/styles/mixins'
interface IIpunt {
  width?:string
  padding?:string
  marginRight?:string
}

export const EditFormContainer = styled.div`
  ${mixin.centralize}
  flex-direction:column;
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



export const Header = styled.h2`
  font-weight:600;
  font-size:1.9rem;
  letter-spacing:2px;

  color:
  ${({theme})=>
    theme.colors.primary.yellow
  };
`;
