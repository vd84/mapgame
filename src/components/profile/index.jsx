import React, { useState, useEffect } from 'react'
import axios from 'axios'
const url = 'http://kubernetes.docker.internal/api/user/'

const ProfileIndex = () => {
    const [username, setUsername] = useState('')


    useEffect(() => {
        fetchUserInformation()
    })



    const fetchUserInformation = () => {
        axios.get(url+1).then(response => {
            setUsername(response.data['username'])
        })
    }
    return (
        <>
            <h1>Welcome {username}</h1>
            <h2>This is you profile page, have a look!</h2>
        </>
    )
}

export default ProfileIndex