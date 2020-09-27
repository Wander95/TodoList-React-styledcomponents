import { hot } from 'react-hot-loader/root';
import React,{ Fragment, FC} from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'Assets/styles/global'
import MainView from 'Layouts/Main';
import { ModalProvider } from 'styled-react-modal'

const App: FC = ()=>{
  return (
    <Fragment>
      {/*  */}
      <Normalize />
      <GlobalStyle />

      <ModalProvider>
        <MainView />
      </ModalProvider>
    </Fragment>
  );
}

export default hot(App);
