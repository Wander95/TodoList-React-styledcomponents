import { Card } from 'Components';
import React,{ FC } from 'react';
import { Container } from './Main.styled';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import IconButton from 'Components/IconButton';


const MainView:FC = ()=> {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card >
          <IconButton onClick={()=>{}}>
            +
          </IconButton>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
