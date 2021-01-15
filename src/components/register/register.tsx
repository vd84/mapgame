import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:8010/user'

const Register = () => {
    const [formData, setFormdata] = useState({
        username: "",
        password: "",
    })
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        axios.post(url, formData).then(response => console.log(response))

    }

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const value = event.target.value
        setFormdata({
            ...formData,
            [event.target.name]: value
        })

    }

    return (
        <>
            <div className="registerWrapper">
                <h1 className="form-header">Register Page</h1>
                {submitting &&
                    <h1>Submitting...</h1>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <TextField id="username" variant="outlined" margin="normal" label="Username" name="username" type="text" value={formData.username} onChange={handleChange} ></TextField>
                    <TextField id="password" variant="outlined" margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange} ></TextField>
                    <Button id="submit-register" variant="outlined" type="submit" >Submit form</Button>
                </form>
            </div>
        </>
    )
}

export default Register