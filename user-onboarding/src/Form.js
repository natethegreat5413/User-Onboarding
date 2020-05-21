import React from 'react'


function Form(props){
    const{
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props


return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a User</h2>
            

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4>General Information</h4>

            <label>
                Name&nbsp;
                <input
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
                />
            </label>

            <label>
                Email&nbsp;
                <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='email'
                />
            </label>

            <label>
                Password&nbsp;
                <input
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='password'
                />
            </label>
            
            <label className='terms'>
                <input 
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={onCheckboxChange}
                />
                Terms of Service
                 
            </label>
            <button className='submit' disabled={disabled}>Submit</button>
        </div>
    </form>
)
}
export default Form