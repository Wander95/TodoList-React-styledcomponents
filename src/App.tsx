import { hot } from 'react-hot-loader/root';
import React,{ Fragment, FC} from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'Assets/styles/global'
import MainView from 'Layouts/Main/Main.view';

const App: FC = ()=>{
  return (
    <Fragment>
      <Normalize />
      <GlobalStyle />
      <MainView />
    </Fragment>
  );
}

export default hot(App);
