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
    .min(1,'Min value 1')
    .required('Is required')
})

