import React from 'react'

const Profile = ({ fetchUserInformation, username, categories }) => {

    return (
        <>
            <h1>Profile</h1>
            <h1>{username}</h1>
            <ul>
                {categories}
            </ul>
        </>
    )
}

export default Profile