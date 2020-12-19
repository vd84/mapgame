import React from 'react'
import TextInput from './textinput'


const TextInputIndex = ({ id, label, onChange, value, name, type }) => {
    return (
        <>
            <TextInput id={id} label={label} onChange={onChange} value={value} name={name} type={type}></TextInput>
        </>
    )
}

export default TextInputIndex