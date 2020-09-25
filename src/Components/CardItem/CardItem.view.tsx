import React,{ FC } from 'react'
import { CardItemProps } from 'types'
import { Container,Name,Price } from './CardItem.styled'
import { switchActive } from 'Controllers/Todo/todo.actions';
import { useDispatch } from 'react-redux'

export interface ICardItem {
  name?:string,
  price?:number
}
const CardItem:FC<CardItemProps> = (props)=> {
  const { description,price,active,id } = props;
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(switchActive(id))
  }

  const styledProps = {
    touched:!active,
    onClick:handleClick
  }
  return (
    <Container
      initial={{x:-200}}
      animate={{ x: 0 }}
      transition={{ duration: .5 }}
      exit={{opacity:0}}
      {...styledProps} >
      <Name> {description} </Name>
      <Price> ${price} </Price>
    </Container>
  )
}

CardItem.defaultProps = {
  description:'No name',
  price: 0
}

export default CardItem
