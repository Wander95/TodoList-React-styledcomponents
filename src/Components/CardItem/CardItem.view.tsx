import React,{ FC } from 'react'
import { Container,Name,Price } from './CardItem.styled'

const CardItem:FC = ()=> {
  return (
    <Container>
      <Name></Name>
      <Price></Price>
    </Container>
  )
}

export default CardItem
