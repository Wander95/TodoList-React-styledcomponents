import { hot } from 'react-hot-loader/root';
import React,{ Fragment, FC} from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'Assets/styles/global'

const App: FC = ()=>{
  return (
    <Fragment>
      <Normalize />
      <GlobalStyle />
    </Fragment>
  );
}

export default hot(App);
