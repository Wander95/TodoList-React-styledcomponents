import React,{ FC,useState } from 'react'
import { Item, status } from 'types'
import { Container,Name,Price } from './CardItem.styled'
import { changeStatusToDeleted,changeStatusToActive } from 'Controllers/Todo/todo.actions';
import { useDispatch } from 'react-redux'

export interface ICardItem {
  name?:string,
  price?:number
}
const CardItem:FC<Item> = (props)=> {
  const { description,price,index } = props;
  const dispatch = useDispatch();

  const [touched, setTouched] = useState<boolean>(false);

  const handleClick = ()=>{
    setTouched(!touched)

    if(touched && index !== undefined){
      dispatch(changeStatusToDeleted({
        status:status.DELETED,
        index:index
      }))
    }else{
      index !== undefined &&
      dispatch(changeStatusToActive({
        status:status.DELETED,
        index:index
      }))
    }
    
  }

  const styledProps = {
    touched,
    onClick:handleClick
  }
  return (
    <Container {...styledProps} >
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
