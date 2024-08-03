import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
    label: string,
    name: string,
    required?: boolean,
    type: string,
    placeholder?: string,
}

function InputField({ label, name, required = false, type, placeholder }: Props) {
    const { control } = useFormContext()

    return (
        <div className="input-wrapper">
            <label className='form-label' htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <input className='input' required={required} {...field} type={type} placeholder={placeholder} id={name} />}
            />
        </div>
    )
}

export default InputField