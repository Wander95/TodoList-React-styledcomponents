import React,{ FC } from 'react';
import { Container, Header } from './Main.styled';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import { IconButton,CardItem,Card } from 'Components';


const MainView:FC = ()=> {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          <Header>Todo Market</Header>
          <CardItem />
          <CardItem />
          <CardItem />
          <IconButton onClick={()=>{}}> + </IconButton>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
