import React, { useState, useEffect } from 'react'
import Profile from './profile'
import axios from 'axios'

const url = 'http://localhost:8010/userByName/kamal'

const ProfileIndex = () => {
    const [username, setUsername] = useState('')
    const [categories, setCategories] = useState([])

    const fetchUserInformation = () => {
        axios.get(url).then(response => {
            setUsername(response.data.username)
            setCategories(response.data.categories)
            console.log(response)
        })
    }

    useEffect(() => {
        fetchUserInformation()

    }, [])

    return (
        < Profile username={username} categories={categories} />
    )
}

export default ProfileIndex