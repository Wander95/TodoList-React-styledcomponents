import React,{ FC } from 'react'
import { Button, Container } from './ButtonGroup.styled';
import { IButtonGroupProps } from 'types'


const ButtonGroup:FC<IButtonGroupProps> = (props)=> {
  const { buttonProps,items } = props;

  console.log('items :>> ', items);
  return (
    <Container>
      <Button 
        {...buttonProps?.activeButtonProps}>All</Button>

      <Button 
        {...buttonProps?.buyingButtonProps}>Buying</Button>

      <Button 
        {...buttonProps?.deletedButtonProps}> Deleted </Button>
    </Container>
  )
}

ButtonGroup.defaultProps = {
  active:true
}

export default ButtonGroup
