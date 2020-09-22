import React,{ FC,useState,memo } from 'react'
import ButtonGroup from './ButtonGroup.view';
import { 
  IButtonGroupProps,
  IButtonGroupContainerProps,
  IButtonProps 
} from 'types'


const ButtonGroupContainer:FC<IButtonGroupContainerProps> = (props)=> {

  const [_activateAll,_setActivatePending] = useState<boolean>(true);
  const [_activateBuying,_setActivateBuying] = useState<boolean>(false);
  const [_activateDeleted,_setActivateDeleted] = useState<boolean>(false);

  const currentActive = {
    all:_activateAll,
    buying:_activateBuying,
    deleted:_activateDeleted
  };

  console.log('currentActive :>> ', currentActive);

  const handleActiveClick = ()=>{
    _setActivatePending(true);
    _setActivateBuying(false);
    _setActivateDeleted(false);
  }

  const handleBuyingClick = ()=>{
    _setActivatePending(false);
    _setActivateBuying(true);
    _setActivateDeleted(false);
  }

  const handleDeleteClick = ()=>{
    _setActivatePending(false);
    _setActivateBuying(false);
    _setActivateDeleted(true);
  }

  const activeButtonProps:IButtonProps = {
    active:_activateAll,
    onClick:handleActiveClick
  }

  const buyingButtonProps:IButtonProps = {
    active:_activateBuying,
    onClick:handleBuyingClick
  }

  const deletedButtonProps:IButtonProps = {
    active:_activateDeleted,
    onClick:handleDeleteClick
  }

  const buttonProps = {
    activeButtonProps,
    buyingButtonProps,
    deletedButtonProps
  }

  const buttonGroupProps:IButtonGroupProps = {
    buttonProps,
    items:props.items
  }
  return (
    <ButtonGroup {...buttonGroupProps}/>
  )
}

export default memo(ButtonGroupContainer)
