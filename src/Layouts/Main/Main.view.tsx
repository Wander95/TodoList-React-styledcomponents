import React,{ FC, useState,useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import * as Yup from 'yup'

import { CardItem,Card,ButtonGroup,IconButton } from 'Components';

import { Formik,Form,FormikHelpers } from 'formik';

import { 
  Container, 
  Header,
  Input,
  SummaryContainer,
  SummaryCount,
  SummaryPrice,
  CardListContainer,
  FormContainer
} from './Main.styled';

export interface IFormik {
  description: string;
  price: number;
}

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

  const inputRef = useRef<HTMLInputElement>(null)

  const inputSchema = Yup.object().shape({
    description:Yup.string()
      .min(1,'Short')
      .required('Is required'),
    price:Yup.number()
      .min(1,'Min value 1')
      .required('Is required')
  })

  const handleSubmit = (values:IFormik,formikBag:FormikHelpers<IFormik>)=>{
    setCardItemList([
      ...cardItemList,
      {
        description:values.description,
        price:values.price
      }
    ])

    formikBag.resetForm({
      values:{
        description:'',
        price:0
      }
    })
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
          <FormContainer>
            <Formik 
              validationSchema={inputSchema}
              onSubmit={handleSubmit}
              initialValues={{description:'',price:0}}> 
                {(formikProps)=>(
                  <Form>
                    <Input 
                      width='8rem'
                      marginRight='.5rem'
                      ref={inputRef}
                      name='description' 
                      onChange={formikProps.handleChange} 
                      value={formikProps.values.description}/>

                    <Input 
                      type='text' 
                      name='price' 
                      onChange={formikProps.handleChange} 
                      value={formikProps.values.price}/>
                      {console.log(formikProps.errors.description)}
                      <IconButton 
                        type='submit'> + </IconButton>
                  </Form>
                )}
            </Formik>
          </FormContainer>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default MainView
