import React,{ FC,useRef } from 'react'
import { Item } from 'types'
import { useDispatch } from 'react-redux'
import { 
  EditFormContainer,
  Input,
  Header
} from './EditForm.styled';

import { IconButton } from 'Components';

import { Formik,Form as FormikForm,FormikHelpers } from 'formik';
import {  inputSchema } from './EditForm.constants';
import { modifyItem } from 'Controllers/Todo/todo.actions';
import { Item as _Item } from 'types';

export interface IEditFormProps {
  Item:_Item,
  handleModalClick:(event?: Event | React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void
}

const EditForm: FC<IEditFormProps> = (props)=> {
  const { Item:{ id,description,price } } = props;
  const { handleModalClick } = props;

  const dispatch = useDispatch()

  const inputDescriptionRef = useRef<HTMLInputElement>(null)
  const inputPriceRef = useRef<HTMLInputElement>(null)

  const initialValues = {
    id:'' || id,
    description:'' || description,
    price:0 || price,
    active:true
  }

  const handleSubmit = (values:Item,formikBag:FormikHelpers<Item>)=>{
    dispatch(modifyItem({
      id:id,
      description:values.description,
      price:values.price,
      active:true
    }))

    formikBag.resetForm({
      values:initialValues
    })

    inputDescriptionRef.current?.focus()
    handleModalClick()
  }

  return (
    <EditFormContainer>
      <Header>Editing</Header>
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
                      && <div style={{color:'white'}}>Pon algo </div>
                }
                <IconButton
                  type='submit'> + </IconButton>
            </FormikForm>
          )}
      </Formik>
    </EditFormContainer>
  )
}

export default EditForm
