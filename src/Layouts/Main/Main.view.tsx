import React,{ FC, useState,useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Assets/styles/theme'
import * as Yup from 'yup'

import { IconButton,CardItem,Card,ButtonGroup } from 'Components';

import { Formik,Form,FormikProps,FormikHelpers } from 'formik';

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

  const inputRef = useRef<HTMLInputElement>(null)

  const inputSchema = Yup.object().shape({
    description:Yup.string()
      .min(1,'Short')
  })

  interface IFormik {
    description: string;
    price: number;
  }

  const handlePress = (
  event: React.KeyboardEvent<HTMLInputElement>,
  formikProps:FormikProps<IFormik>)=>{
    setCardItemList([
      ...cardItemList,

    ])
  }

  const handleSubmit = (values:IFormik,formikBag:FormikHelpers<IFormik>)=>{
    setCardItemList([
      ...cardItemList,
      {
        description:values.description,
        price:values.price
      }
    ])
    formikBag.resetForm({values:{description:'',price:0}})
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
            onSubmit={handleSubmit}
            initialValues={{description:'',price:0}}> 
              {(formikProps)=>(
                <Form>
                  <Input 
                    ref={inputRef}
                    onKeyPress={(evt)=>
                      handlePress(evt,formikProps)
                    }
                    name='description' 
                    onChange={formikProps.handleChange} 
                    value={formikProps.values.description}/>
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
