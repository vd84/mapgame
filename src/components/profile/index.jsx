import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Siderbar from '../../smallercomponents/header/header';
import Profile from './profile'

const url = 'http://kubernetes.docker.internal/api/user/'

const ProfileIndex = () => {
    const [username, setUsername] = useState('')

    const pressedPlayButton = () => {

    }


    useEffect(() => {
        fetchUserInformation()
    })





    const fetchUserInformation = () => {

        setUsername('Douglas')
        // axios.get(url+1).then(response => {
        //     setUsername(response.data['username'])
        // })
    }
    return (
        <>
            <Siderbar />
            <Profile username={username} />
        </>
    )
}

export default ProfileIndex