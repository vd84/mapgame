import { Button } from '@material-ui/core'
import React from 'react'
import Dropdown from '../../smallercomponents/dropdown/dropdown'
import Link from 'next/link'

const Profile = ({ username }) => {

    const play = () => {
        Router
    }

    return (
        <>
            <h1>Welcome {username}, please choose categories</h1>
            <Dropdown />
            <Button>Play hej</Button>
        </>
    )
}

export default Profile