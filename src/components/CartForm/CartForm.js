import "./CartForm.css"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikView from "../FormikControl/FormikView";


const CartForm = ({ order }) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('(Obligatorio)'),
        lastName: Yup.string().required('(Obligatorio)'),
        phone: Yup.string().required('(Obligatorio)'),
        email: Yup.string().email('Formato de email inválido').required('(Obligatorio)'),
        confirmEmail: Yup.string().email('Formato de email inválido').oneOf([Yup.ref('email'), ''], 'Los correos deben coincidir').required('(Obligatorio)')
    })

    const onSubmit = (values) => {
        const buyer = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            phone: values?.phone,
            email: values?.email
        }
        order(buyer)

    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => {
                return <Form id="cartForm">
                    <FormikView
                        control='input'
                        type='text'
                        label='Nombre'
                        name='firstName'
                        placeholder='Lucas'
                    />
                    <FormikView
                        control='input'
                        type='text'
                        label='Apellido'
                        name='lastName'
                        placeholder='Paul'
                    />
                    <FormikView
                        control='input'
                        type='text'
                        label='Teléfono/Celular'
                        name='phone'
                        placeholder='123456789'
                    />
                    <FormikView
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                        placeholder='ejemplo@gmail.com'
                    />
                    <FormikView
                        control='input'
                        type='email'
                        label='Confirmar email'
                        name='confirmEmail'
                        placeholder='ejemplo@gmail.com'
                    />
                    <button id="formButton" type="submit" disabled={!formik.isValid}>Realizar compra</button>
                </Form>
            }}
        </Formik>
    )

}


export default CartForm