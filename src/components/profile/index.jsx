import React, { useState, useEffect } from 'react'
import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.restAPIKey)


const url = '/api/test'


console.log("hejh " + process.env.REACT_APP_APIKEY)


const ProfileIndex = () => {
    const [test, setTest] = useState('')

    const fetchUserInformation = () => {
        console.log('fetching from ' + url)
        axios.get(url).then(response => {
            setTest(response.data)
        })
    }
    return (
        <>
        <button onClick={fetchUserInformation}>ladda backend uppdaterad</button>
        <h1>{'testdata' + test}</h1>
        <h1>{'env:' +  process.env.REACT_APP_API_ENDPOINT}</h1>
        <h1>{'env:' +  process.env.NODE_ENV}</h1>
        <h1>URL {url}</h1>
        </>
    )
}

export default ProfileIndex