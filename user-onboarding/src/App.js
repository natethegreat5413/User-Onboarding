import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'
import * as yup from 'yup'
import NewUser from './Form'
import User from './user';

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ///////CHECKBOX///////
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const formSchema = yup.object().shape({

  name: yup
  .string()
  .required('Name is required'),
  email: yup
  .string()
  .email('a VALID email is required')
  .required('email is required'),
  password: yup
  .string()
  .min(5, 'password must have at least 5 characters')
  .required('password is required'),
  // terms: yup
  // .string()
  // .required('must accept terms of service')
  
})

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)  
  
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // const getUsers = () => {
  //   axios.get(url)
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  //   .catch(error => {

  //   })
  // }

  // useEffect(() => {
  //   getUsers()
  
  // }, [])

  const postUsers = user => {

    axios.post(url, user)
    .then(res => {
      setUsers([...users, res.data])
      
    })
    .catch(error => {

    })
  }

  useEffect(() => {

    formSchema.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])


  const onSubmit = evt => {
    evt.preventDefault()
  

  const newUsers = {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
    terms: formValues.terms,
  }

  postUsers(newUsers)
  setFormValues(initialFormValues)

}

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value

  yup.reach(formSchema, name)
  .validate(value)
  .then(valid => {
    
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(error => {
    setFormErrors({
      ...formErrors,
      [name]: error.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value,
  })
}

const onCheckboxChange = evt => {
  const { name } = evt.target
  const isChecked = evt.target.checked

  setFormValues({
    ...formValues,
    
      [name]: isChecked,
    }
  )
}


 return (
    <div className="App">
    
      <h2>User Onboarding</h2>
      
      
      <div>
      <NewUser 
      values={formValues}
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      disabled={formDisabled}
      errors={formErrors}
      />
    
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
      </div>
    </div>
  )
}


