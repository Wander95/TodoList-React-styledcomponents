import React,{ useState, FC,MouseEvent } from 'react'
import { Button, Container } from './ButtonGroup.styled';

export interface IButtonGroup {
  active?: boolean 
}

export interface IState {
  active:boolean
}
const ButtonGroup:FC<IButtonGroup> = (props)=> {
  const [_activatePending,_setActivatePending] = useState<boolean>(false);
  const [_activateBuying,_setActivateBuying] = useState<boolean>(false);
  const [_activateDeleted,_setActivateDeleted] = useState<boolean>(false);

  const handleActiveClick = (evt:MouseEvent<HTMLSpanElement>)=>{
    _setActivatePending(true);
    _setActivateBuying(false);
    _setActivateDeleted(false);
  }

  const handleBuyingClick = (evt:MouseEvent<HTMLSpanElement>)=>{
    _setActivatePending(false);
    _setActivateBuying(true);
    _setActivateDeleted(false);
  }

  const handleDeleteClick = (evt:MouseEvent<HTMLSpanElement>)=>{
    _setActivatePending(false);
    _setActivateBuying(false);
    _setActivateDeleted(true);
  }

  const buttonProps = {
    active:_activatePending
  }

  const buttonProps2 = {
    active:_activateBuying
  }

  const buttonProps3 = {
    active:_activateDeleted
  }
  
  return (
    <Container>
      <Button 
        {...buttonProps} 
        onClick={handleActiveClick}>Pending</Button>

      <Button 
        {...buttonProps2} 
        onClick={handleBuyingClick}>Buying</Button>

      <Button 
        {...buttonProps3}
        onClick={handleDeleteClick}> Deleted </Button>
    </Container>
  )
}

ButtonGroup.defaultProps = {
  active:true
}

export default ButtonGroup
