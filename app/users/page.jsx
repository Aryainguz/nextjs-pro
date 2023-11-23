import React from 'react'
import { getAllUsers } from '../../utils/features'

const Users = async () => {
    const users = await getAllUsers()

    return (
        <>
            {users.map((aUser,index) => (
                <div key={index}>
                    <p>{aUser.name} - {aUser.email}</p>
                </div>
            ))}
        </>
    )
}

export default Users