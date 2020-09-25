import React,{ FC, useState,useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import { IMainProps } from 'types'

import { CardItem,Card,ButtonGroup,Form } from 'Components';

import { 
  Container, 
  Header,
  SummaryContainer,
  SummaryCount,
  SummaryPrice,
  CardListContainer,
  Input
} from './Main.styled';

import { AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { regexFiltered } from 'Controllers/App/app.actions'
import { loadFromLocalStorage } from 'Controllers/Todo/todo.actions'

const MainView:FC<IMainProps> = (props)=> {
  const {  items=[] } = props
  const dispatch = useDispatch();

  const itemsQuantity = items.length;

  const itemsTotalPrice = items.length > 0 
  ? items.reduce((previousItem,currentItem,currentIndex)=>{
    return {
      ...currentItem,
      description:currentItem.description,
      price:Number(previousItem.price) + Number(currentItem.price),
    }
  })
  : {
    description:'',
    price:0,
    active:true
  }

  const [inputState, setInputState] = useState<string>('')


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const filterOption = event.target.value;
    setInputState(filterOption)
    dispatch(regexFiltered(filterOption.toLocaleLowerCase()))
  }

  useEffect(()=>{
    const localItems = localStorage.getItem('appState')
    const parsedLocalItems = JSON.parse(localItems!)

    if(Location){
      dispatch(loadFromLocalStorage(parsedLocalItems) )
    }
    // eslint-disable-next-line
  },[])
  useEffect(()=>{
    localStorage.setItem(
      'appState',
      JSON.stringify(items)
    )
  })
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          
          <Header>Todo Market</Header>
          <Input type="text" onChange={handleInputChange} value={inputState}/>
          <CardListContainer>
            <AnimatePresence>
              {
                items.length > 0 && items.map((cardItem)=>(
                  <CardItem {...{
                    key:cardItem.id,
                    ...cardItem
                  }}/>
                ))
              }
            </AnimatePresence>
          </CardListContainer>
        
          <SummaryContainer>
            <SummaryCount>{itemsQuantity} Items</SummaryCount>
            <SummaryPrice>${itemsTotalPrice.price}</SummaryPrice>
          </SummaryContainer>

          <ButtonGroup />
          <Form />
          
        </Card>
      </Container>  
    </ThemeProvider>
  )
}

export default MainView
