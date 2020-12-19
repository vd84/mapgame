import React, { useState, useEffect } from 'react'
import TextInputIndex from '../../smallercomponents/textinput'


const Register = () => {
    const [formData, setFormdata] = useState({
        username: "",
        password: "",
        passwordCopy: ""
    })
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        console.log(formData)

        setTimeout(() => {
            setSubmitting(false);
        }, 3000);




    }

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const value = event.target.value
        setFormdata({
            ...formData,
            [event.target.name]: value
        })

    }

    return (
        <>
            <h1>Register Page</h1>
            {submitting &&
                <h1>Submitting...</h1>}
            <form onSubmit={handleSubmit}>
                <TextInputIndex id="username" name="username" type="text" label="Enter a username" value={formData.username} onChange={handleChange} ></TextInputIndex>
                <TextInputIndex id="password" name="password" type="password" label="Enter a password" value={formData.password} onChange={handleChange} ></TextInputIndex>
                <TextInputIndex id="repassword" name="passwordCopy" type="password" label="Re-enter password" value={formData.passwordCopy} onChange={handleChange} ></TextInputIndex>
                <button >Submit form</button>
            </form>


        </>
    )
}

export default Register