import React from 'react'


type Props = Readonly<{
    id: string,
    label: string,
    onChange: () => null,
    value: string,
    name: string,
    type: string
}>

const TextInput = ({ id, label, onChange, value, name, type }: Props) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={id} type={type} name={name} onChange={onChange} value={value}></input >
        </>
    )
}

export default TextInput