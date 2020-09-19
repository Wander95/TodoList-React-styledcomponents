import styled from 'styled-components';
interface IIpunt {
  width?:string
  padding?:string
  marginRight?:string
}

export const FormContainer = styled.div`

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
