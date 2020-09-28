import * as Yup from 'yup'

export const initialValues = {
  id:'',
  description:'',
  price:0,
  active:true
}

export const inputSchema = Yup.object().shape({
  description:Yup.string()
    .min(1,'Short')
    .required('Is required'),
  price:Yup.number()
    .min(0,'Min value 1')
    .max(99999,'max value 4 digits only')
    .required('Is required')
})

