import React,{ FC } from 'react';
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

const MainView:FC<IMainProps> = (props)=> {
  const {  items=[] } = props

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

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          
          <Header>Todo Market</Header>
          <Input type="text"/>
          <CardListContainer>
            <AnimatePresence>
            
            {items.length > 0 && items.map((cardItem)=>(
              <CardItem {...{
                key:cardItem.id,
                ...cardItem
              }}
              />
            ))}
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
