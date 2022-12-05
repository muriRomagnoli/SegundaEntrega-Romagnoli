import React from 'react'
import { Field, ErrorMessage } from 'formik'
import FormikTextError from './FormikTextError'

const FormikInput = (props) => {
    const { type, label, name, placeholder, ...rest } = props
    return (
        <div>
            <label className="formLabel" htmlFor={name}>{label}</label>
            <Field className="formField" id={name} type={type} name={name} placeholder={placeholder} {...rest} />
            <ErrorMessage component={FormikTextError} name={name} />
        </div>
    )
}

export default FormikInput
