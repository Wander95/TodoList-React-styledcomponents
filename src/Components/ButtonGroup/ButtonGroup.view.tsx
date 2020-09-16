import React,{ FC } from 'react'
import { Button, Container } from './ButtonGroup.styled';

const ButtonGroup:FC = ()=> {
  return (
    <Container>
      <Button>Pending</Button>
      <Button>Buying</Button>
      <Button>Deleted</Button>
    </Container>
  )
}

export default ButtonGroup
