import React,{ FC,ReactChildren } from 'react';
import { Container } from './Card.styled';


export interface CardProps {
  children:FC<ReactChildren>
}
const Card:FC = (props)=> {
  const { children } = props;
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Card
