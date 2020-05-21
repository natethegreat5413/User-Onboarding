import React from 'react'

function Users({details}){
    if (!details) {
        return <h3>Working on fetching User</h3>
    }
    return(
        <div className='user-container'>
            <h2>Name: {details.name}</h2>
            <h2>Email: {details.email}</h2>
            {/* <h2>Password: {details.password}</h2> */}
            {/* <h2>Terms of Service {details.terms}</h2> */}

        </div>
    )
}

export default Users