import React from 'react'

function NewUser(props){
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props
    console.log(values.terms.agree)
    return (
        <form className='User container'>
            <h2>User Form</h2>
            
            <div className='errors'>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.terms}</p>
            </div>

            <label>Name: &nbsp;
            <input
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
                /></label>

            <label>Email: &nbsp;
            <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
                /></label>

                <label>Password: &nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    /></label>

            <label> Terms of Service </label><input
                value={values.terms}
                onChange={onCheckboxChange}
                name='agree'
                type='checkbox' />

            
            <button onClick={onSubmit} disabled={disabled}>submit</button>
            
        </form>
    )
}

export default NewUser