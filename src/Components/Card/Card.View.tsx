import React,{ FC,ReactChildren } from 'react';
import * as CardStyles from './Card.styled';


const { Container } = CardStyles;

export interface CardProps {
  children:FC<ReactChildren>
}
const Card:FC = (props)=> {
  const { children } = props;
  return (
    <Container>
      {children}
      asdasd
    </Container>
  )
}

export default Card
