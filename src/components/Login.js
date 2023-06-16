import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='form-details'>
      <h1>LOGIN TO SHABANA</h1>
      <h4>
        Don't have an account yet?
        <Link to='/signup'> Sign up here.</Link>
      </h4>
      <form action='' className='form-container'>
        <label htmlFor='email'>Email Address</label>
        <input type='text' id='email' name='email' />
        <br />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
        <br />

        <button className='submit-btn' type='submit'>
          LOG IN
        </button>
      </form>
    </div>
  )
}

export default Login
