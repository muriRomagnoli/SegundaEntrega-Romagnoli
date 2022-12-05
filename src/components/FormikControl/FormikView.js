import React from 'react'
import FormikInput from './FormikInput'

const FormikView = (props) => {
    const { control, ...rest } = props
    return (control === 'input' ? <FormikInput {...rest} /> : null)
}

export default FormikView