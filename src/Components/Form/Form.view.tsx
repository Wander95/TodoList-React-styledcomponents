import React,{ FC,useRef } from 'react'
import { Item } from 'types'
import { useDispatch } from 'react-redux'
import { 
  FormContainer,
  Input
} from './Form.styled';

import { IconButton } from 'Components';

import { Formik,Form as FormikForm,FormikHelpers } from 'formik';
import { initialValues, inputSchema } from './Form.constants';
import { addItem } from 'Controllers/Todo/todo.actions';



const Form: FC = ()=> {
  const dispatch = useDispatch()

  const inputDescriptionRef = useRef<HTMLInputElement>(null)
  const inputPriceRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (values:Item,formikBag:FormikHelpers<Item>)=>{
    dispatch(addItem({
      description:values.description,
      price:values.price
    }))

    formikBag.resetForm({
      values:initialValues
    })

    inputDescriptionRef.current?.focus()
  }

  return (
    <FormContainer>
      <Formik 
        validationSchema={inputSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}> 
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
