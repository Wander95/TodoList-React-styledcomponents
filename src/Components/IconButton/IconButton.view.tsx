import React,{ FC } from 'react'
import { Container,IconButton as CiconButton } from './IconButton.styled'

export interface IIconButton {
  onClick:((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
}

const IconButton:FC<IIconButton> = (props)=> {
  const { children,onClick } = props;
  return (
    <Container onClick={onClick}>
      <CiconButton>
        {children}
      </CiconButton>
    </Container>
  )
}

export default IconButton
