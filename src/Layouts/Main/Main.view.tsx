import React,{ FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import { IconButton,CardItem,Card } from 'Components';

import { 
  Container, 
  Header,
  SummaryContainer,
  SummaryCount,
  SummaryPrice
} from './Main.styled';

const MainView:FC = ()=> {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          <Header>Todo Market</Header>
          <CardItem />
          <CardItem />
          <CardItem />
        
          <SummaryContainer>
            <SummaryCount>03 Items</SummaryCount>
            <SummaryPrice>$150</SummaryPrice>
          </SummaryContainer>

          <IconButton onClick={()=>{}}> + </IconButton>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
