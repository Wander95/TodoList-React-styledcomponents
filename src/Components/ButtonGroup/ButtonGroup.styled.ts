import styled from 'styled-components';
interface IButton{
  active?:boolean
}

export const Container = styled.div`

`;

export const Button = styled.span<IButton>`
  display:inline-block;
  padding: .5rem .8rem;
  cursor:pointer;

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
`;