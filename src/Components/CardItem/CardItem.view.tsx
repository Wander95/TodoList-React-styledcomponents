import React,{ FC,useState } from 'react'
import { Container,Name,Price } from './CardItem.styled'

export interface ICardItem {
  name?:string,
  price?:number
}
const CardItem:FC<ICardItem> = (props)=> {
  const { name,price } = props;

  const [touched, setTouched] = useState<boolean>(false);

  const handleClick = ()=>{
    setTouched(!touched)
  }

  const styledProps = {
    touched,
    onClick:handleClick
  }
  return (
    <Container {...styledProps} >
      <Name> {name} </Name>
      <Price> ${price} </Price>
    </Container>
  )
}

CardItem.defaultProps = {
  name:'No name',
  price: 0
}

export default CardItem
