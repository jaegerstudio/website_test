import React,{useState} from 'react'
import HeaderPage from '../HeaderPage'
import {TextField, Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

//src
import './SignUpPage.scss'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  return (
    <>
      <div className="sign-up-main">
      <HeaderPage />
      <br/><br/>
      <form onSubmit={(e)=> {
        e.preventDefault()
        console.log("sub")}}>
        <div className="sign-up-form">
          <h3>Register</h3>
          <p>Enter following details to register</p>
          
          <TextField
            error={false}
            //helperText= 'Please Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            type="email"
            variant="outlined"
          />
          <TextField
            error={false}
            //helperText= 'Please Enter Your Email'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            type="password"
            variant="outlined"
          />
          <TextField
            error={false}
            //helperText= 'Please Enter Your Email'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            variant="outlined"
          />
          <Button type='submit' variant="contained">Continue</Button>
        </div>
        <p className="no-account">
          Already have an account?<span onClick={() => navigate('/sign-in')}>Sign in</span>
        </p>
        <br/>
        </form>
      </div>
    </>
  )
}
