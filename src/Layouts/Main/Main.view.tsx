import React,{ FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'


import { CardItem,Card,ButtonGroup,Form } from 'Components';

import { 
  Container, 
  Header,
  SummaryContainer,
  SummaryCount,
  SummaryPrice,
  CardListContainer
} from './Main.styled';


const MainView:FC = ()=> {
  
  const cardItemList:Array<{description:string,price:number}> = []
  
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          <Header>Todo Market</Header>

          <CardListContainer>
            {cardItemList.map((cardItem,index)=>
              <CardItem {...{
                key:`card-item${index}`,
                name:cardItem.description,
                price:cardItem.price}
              }/>
            )}
          </CardListContainer>
        
          <SummaryContainer>
            <SummaryCount>03 Items</SummaryCount>
            <SummaryPrice>$150</SummaryPrice>
          </SummaryContainer>

          <ButtonGroup />
          <Form />
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
