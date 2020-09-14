import React,{ FC } from 'react'
import { Container,Name,Price } from './CardItem.styled'

export interface ICardItem {
  name:string,
  price:number
}
const CardItem:FC<ICardItem> = (props)=> {
  const { name,price } = props;

  return (
    <Container>
      <Name> {name} </Name>
      <Price> ${price} </Price>
    </Container>
  )
}

CardItem.defaultProps = {
  name:'No name Assigned',
  price: 0
}

export default CardItem
