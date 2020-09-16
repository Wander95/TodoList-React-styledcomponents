import React,{ FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import * as Yup from 'yup'

import { IconButton,CardItem,Card,ButtonGroup } from 'Components';

import {Formik,Form} from 'formik';

import { 
  Container, 
  Header,
  Input,
  SummaryContainer,
  SummaryCount,
  SummaryPrice
} from './Main.styled';

const MainView:FC = ()=> {
  
  const List:Array<ICardItemList> = [
    {
      description:'huevos',
      price:65
    },
    {
      description:'pepino',
      price:85
    }
  ] 
  const [cardItemList, setCardItemList] = useState< Array<ICardItemList> >(List)


  const inputSchema = Yup.object().shape({
    description:Yup.string()
      .min(1,'Short')
  })


  const handlePress = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if (event.key === 'Enter'){
      console.log('object :>> ');
      setCardItemList([]);
    }
  }

  interface ICardItemList {
    description?:string,
    price?:number
  }

  
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card>
          <Header>Todo Market</Header>
  
          {cardItemList.map((cardItem,index)=>
            <CardItem {...{
              key:`card-item${index}`,
              name:cardItem.description,
              price:cardItem.price}
            }/>
          )}
        
          <SummaryContainer>
            <SummaryCount>03 Items</SummaryCount>
            <SummaryPrice>$150</SummaryPrice>
          </SummaryContainer>

          <ButtonGroup />
          
          <Formik 
            validationSchema={inputSchema}
            onSubmit={()=>{}}
            initialValues={{description:'',price:0}}>
              {(props)=>(
                <Form>
                  <Input 
                    onKeyPress={handlePress}
                    name='description' 
                    onChange={props.handleChange} 
                    value={props.values.description}/>
                  {/* <Input type='number' name='price' onChange={props.handleChange} value={props.values.price}/> */}
                </Form>
              )}
          </Formik>
        
          <IconButton onClick={()=>{}}> + </IconButton>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
