import styled from 'styled-components';
interface IButton{
  active?:boolean
}

export const Container = styled.div`
  background-color:
  ${({theme})=>
    theme.colors.primary.black
  };

  border-radius:
  ${({theme})=>
    theme.borderRadius.light
  };
`;

export const Button = styled.span<IButton>`
  display:inline-block;
  padding: .5rem .8rem;
  cursor:pointer;
  font-weight:550;
  width:3.5rem;
  text-align:center;
  //**If active is given */
  background-color:
  ${(props)=>
    props.active 
    ? props.theme.colors.primary.yellow
    : props.theme.colors.primary.black
  };

  color:
  ${(props)=>
    props.active
    ? props.theme.colors.primary.black
    : props.theme.colors.primary.lightYellow
  };

  border-radius:
  ${({theme})=>
    theme.borderRadius.light
  };
`;