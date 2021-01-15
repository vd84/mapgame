import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const url = 'http://localhost:8010/auth'

const Login = () => {
    const router = useRouter()
    const [formData, setFormdata] = useState({
        username: "",
        password: "",
    })
    const [submitting, setSubmitting] = useState(false);

    const routeToHome = () => {
        router.push('/home')
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setSubmitting(true);

        axios.post(url, formData).then(response => routeToHome()).catch(error => {
            alert(error)
        })


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
                <h1 className="form-header">Login Page</h1>
                {submitting &&
                    <h1>Submitting...</h1>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <TextField id="username" variant="outlined" margin="normal" label="Username" name="username" type="text" value={formData.username} onChange={handleChange} ></TextField>
                    <TextField id="password" variant="outlined" margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange} ></TextField>
                    <Button id="submit-register" variant="outlined" type="submit" >Login</Button>
                    <h1>Testar att uppdatera</h1>
                </form>
            </div>
        </>
    )
}

export default Login