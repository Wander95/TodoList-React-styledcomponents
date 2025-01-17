import React,{ FC,Fragment,useState } from 'react'
import { CardItemProps } from 'types'
import { 
  Container,
  Name,
  Price,
  DeleteIcon,
  ModifyIcon,
  StyledModal
} from './CardItem.styled'

import { switchActive,deleteItem } from 'Controllers/Todo/todo.actions';
import { useDispatch } from 'react-redux'


import { EventInfo } from 'framer-motion';
import { EditForm } from 'Components';

import { Delete,HorizontalRule } from '@styled-icons/material';

const CardItem:FC<CardItemProps> = (props)=> {
  const { description,price,active,id } = props;
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(switchActive(id))
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false)


  const handleModalClick = (event?:  Event | React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>)=>{
    event?.stopPropagation();
    setIsModalOpen(!isModalOpen);
  }

  const handleOnHoverStart = (event: MouseEvent, info: EventInfo)=>{
    setIsButtonVisible(true);
  }

  const handleOnHoverEnd = (event: MouseEvent, info: EventInfo)=>{
    setIsButtonVisible(false);
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    event.stopPropagation();
    
    dispatch(deleteItem(id));
  }


  const handleOpenModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    event.stopPropagation();
    handleModalClick(event);
  }

  const styledProps = {
    touched:!active,
    onClick:handleClick
  }

  
  const editFormProps = {
    Item:{
      description,
      price,
      active,
      id
    },
    handleModalClick
  }
  return (
    <Fragment>

      <StyledModal 
        isOpen={isModalOpen} 
        onBackgroundClick={handleModalClick}
        onEscapeKeydown={handleModalClick}>
        <EditForm {...editFormProps}/>
      </StyledModal>
    <Container
      initial={{x:-200}}
      animate={{ x: 0 }}
      transition={{ duration: .5 }}
      exit={{opacity:0}}
      {...styledProps} 
      onHoverStart={handleOnHoverStart}
      onHoverEnd={handleOnHoverEnd}
      onTap={handleOnHoverStart}>



      

      <Name> {
      description.length > 11 
      ? description.substr(0,9) + '...' 
      : description
      } </Name>

      <Price> 
        {isButtonVisible 
        && <DeleteIcon onClick={handleDeleteClick}>{<Delete/>}</DeleteIcon>}

        {isButtonVisible && 
        <ModifyIcon onClick={handleOpenModal}><HorizontalRule size='55' /></ModifyIcon>}
        ${price} 
      </Price>
    </Container>
    </Fragment>
  )
}

CardItem.defaultProps = {
  description:'No name',
  price: 0
}

export default CardItem
