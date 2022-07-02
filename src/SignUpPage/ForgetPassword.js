import React,{useState} from 'react'
import HeaderPage from '../HeaderPage'
import {TextField, Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

//src
import './SignUpPage.scss'

export default function ForgetPassword() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  return (
    <>
      <div className="sign-up-main">
      <HeaderPage />
      <br/><br/>
      <form onSubmit={(e)=> {
        e.preventDefault()
        console.log("sub")}}>
        <div className="forgot-pass-form">
          <h3>Forgot Password</h3>
          <p>Enter your email to reset password</p>
          
          <TextField
            error={false}
            //helperText= 'Please Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            type="email"
            variant="outlined"
          />
          <Button type='submit' variant="contained">Continue</Button>
        </div>
        <p className="no-account">
          Try with another account?<span onClick={() => navigate('/sign-in')}>Sign in</span>
        </p>  
        <br/>
        </form>
      </div>
    </>
  )
}
