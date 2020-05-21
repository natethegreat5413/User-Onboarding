import React, {useState, useEffect} from 'react';
import Form from './Form'
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Users from './user'
// import formSchema from './formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const formSchema = yup.object().shape({
  name: yup.string()
  .trim()
  .min(3, 'Name must be at least three characters')
  .required('Name is required'),
  email: yup.string()
  .email('The email must be a valid email address')
  .required('The email is a required field'),
  password: yup.string()
  .trim()
  .min(5, 'The password must be at least 5 characters')
  .required('Password required'),
  // terms: yup.boolean().oneOf([true], 'Please agree to terms of service'),

})

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)


  // const getUser = (user) => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  //   .catch(error => {
  //     console.log('there was an error', error)
  //   })

  // }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(error => {
      console.log('there was an error', error)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  useEffect(() => {

    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

    const onSubmit = evt => {
     evt.preventDefault()

  const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }   

    postNewUser(newUser)
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
        [name]: ''
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
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const {checked} = evt.target

    setFormValues({
      ...formValues,
        [name]: checked,
    })
  }

  // useEffect(() => {
  //   getUser()
  // }, [])
  return (

    <div className="App">
      <div>
        <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
        />
        {
          users.map(user => {
            return(
              <Users key={user.id} details={user} />
            )
          })
        }
      </div>
    </div>
  );
}





