import React,{ FC,MouseEvent } from 'react'
import { Container,IconButton as CIconButton } from './IconButton.styled'


export interface IIconButton {
  type?:string
  onClick?:((
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent> 
  ) => void ) 
  

}

const IconButton:FC<IIconButton> = (props)=> {
  const { children,onClick } = props;

  return (
    <Container onClick={onClick} >
      <CIconButton type='submit'>
        {children}
      </CIconButton>
    </Container>
  )
}

export default IconButton
