import { Card } from 'Components';
import React,{ FC } from 'react';
import * as MainViewStyles from './Main.styled';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'

const { Container } = MainViewStyles;
const MainView:FC = ()=> {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  )
}

export default MainView
