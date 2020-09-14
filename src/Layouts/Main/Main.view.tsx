import { Card } from 'Components';
import React,{ FC } from 'react';
import { Container, Header } from './Main.styled';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import IconButton from 'Components/IconButton';


const MainView:FC = ()=> {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          <Header>Todo Market</Header>
          <IconButton onClick={()=>{}}> + </IconButton>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
