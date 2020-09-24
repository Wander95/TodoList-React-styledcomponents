import React,{ FC,useState,memo } from 'react'
import ButtonGroup from './ButtonGroup.view';
import { 
  IButtonGroupProps,
  IButtonGroupContainerProps,
  IButtonProps,
  ButtonGroupSelection
} from 'types'

const ButtonGroupContainer:FC<IButtonGroupContainerProps> = (props)=> {
  const { changeSelection } = props;
  
  const [_activateAll,_setActivatePending] = useState<boolean>(true);
  const [_activateBuying,_setActivateBuying] = useState<boolean>(false);
  const [_activateDeleted,_setActivateDeleted] = useState<boolean>(false);


  const handleActiveClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
    event.stopPropagation()
    _setActivatePending(true);
    _setActivateBuying(false);
    _setActivateDeleted(false);
    changeSelection(ButtonGroupSelection.all)
  }

  const handleBuyingClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
    event.stopPropagation()
    _setActivatePending(false);
    _setActivateBuying(true);
    _setActivateDeleted(false);
    changeSelection(ButtonGroupSelection.active)
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
    event.stopPropagation()
    _setActivatePending(false);
    _setActivateBuying(false);
    _setActivateDeleted(true);
    changeSelection(ButtonGroupSelection.deleted)
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
    buttonProps
  }


  return (
    <ButtonGroup {...buttonGroupProps}/>
  )
}

export default memo(ButtonGroupContainer)
