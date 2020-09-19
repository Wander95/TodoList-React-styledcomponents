import React,{ FC,useRef,useState } from 'react'
import { 
  FormContainer,
  Input
} from './Form.styled';

import { IconButton } from 'Components';

import * as Yup from 'yup'
import { Formik,Form as FormikForm,FormikHelpers } from 'formik';


export interface IFormik {
  description: string;
  price: number;
}

interface ICardItemList {
  description?:string,
  price?:number
}
const Form: FC = ()=> {

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
  const [cardItemList, setCardItemList] = useState<Array<ICardItemList> >(List)


  const inputDescriptionRef = useRef<HTMLInputElement>(null)
  const inputPriceRef = useRef<HTMLInputElement>(null)

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

    inputDescriptionRef.current?.focus()
  }

  return (
      <FormContainer>
            <Formik 
              validationSchema={inputSchema}
              onSubmit={handleSubmit}
              initialValues={{description:'',price:0}}> 
                {(formikProps)=>(
                  <FormikForm>
                    <Input 
                      width='8rem'
                      marginRight='.5rem'
                      ref={inputDescriptionRef}
                      name='description' 
                      onChange={formikProps.handleChange} 
                      value={formikProps.values.description}/>

                    <Input 
                      type='text' 
                      name='price' 
                      ref={inputPriceRef}
                      onChange={formikProps.handleChange} 
                      value={formikProps.values.price}/>
                      {
                        formikProps.touched.description 
                          && formikProps.errors.description 
                            && <div>asd</div>
                      }

                      

                      <IconButton
                        type='submit'> + </IconButton>
                  </FormikForm>
                )}
            </Formik>
          </FormContainer>
  )
}

export default Form
