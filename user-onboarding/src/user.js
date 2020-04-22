import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Working on fetching User</h3>
    }
    return (
        
        <div className='user container'>
            <h2>Name: {details.name}</h2>
            <h2>Email: {details.email}</h2>
            <h2>Password: {details.password}</h2>
        
        <div>
            <h2>Terms of Service:</h2> 
               <p>These are the terms of service that you agreed to.</p>
            
          </div>
        
      </div>
    )
  }
  
  export default User
