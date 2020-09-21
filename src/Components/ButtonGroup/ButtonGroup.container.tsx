import React,{ FC,useState } from 'react'
import ButtonGroup from './ButtonGroup.view';


export interface IButtonProps {
  active:boolean,
  onClick:()=>void
}

export interface ButtonProps {
  activeButtonProps:IButtonProps,
  buyingButtonProps:IButtonProps,
  deletedButtonProps:IButtonProps
}
const ButtonGroupContainer:FC = ()=> {

  const [_activatePending,_setActivatePending] = useState<boolean>(true);
  const [_activateBuying,_setActivateBuying] = useState<boolean>(false);
  const [_activateDeleted,_setActivateDeleted] = useState<boolean>(false);

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
    active:_activatePending,
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

  const buttonGroupProps = {
    buttonProps
  }
  return (
    <ButtonGroup {...buttonGroupProps}/>
  )
}

export default ButtonGroupContainer
