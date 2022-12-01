import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const login = () => {
  return (
    <div>
       <h1>Login  </h1>
    <form noValidate autoComplete="off">
        <TextField label="Email" /><br/>  <br/> 
        <TextField  label="Password" /><br/>
        <br/>   <br/>
        <Button variant="contained" color="secondary">
        Login
      </Button>
      <br /> <br />
      <Button>Forget Password</Button>
      <Button>Sign Up</Button>
      </form>

    </div>
  )
}

export default login