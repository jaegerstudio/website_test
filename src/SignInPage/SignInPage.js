import React, { useState } from "react";
import HeaderPage from "../HeaderPage";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

//src
import "./SignInPage.scss";
import { SignIn } from "./action";

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    SignIn({email, password, callback: (res) => {
      console.log(res)
    }})
    navigate("/inbox");
  };
  return (
    <>
      <div className="sign-in-main">
        <HeaderPage />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="sign-in-form">
            <h3>Welcome Back</h3>
            <p>Enter your credientials to access your account</p>
            <TextField
              error={false}
              //helperText= 'Please Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              type="email"
              variant="outlined"
              required
            />
            <TextField
              error={false}
              //helperText= 'Please Enter Your Email'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //inputProps={{ pattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"}}
              placeholder="Enter your Password"
              type="password"
              variant="outlined"
              required
            />

            <div className="sign-in-option">
              <FormControlLabel
                control={
                  <Checkbox
                    value={rememberMe}
                    onChange={(e) => setRememberMe(e)}
                  />
                }
                label="Remember Me"
              />
              <p
                className="forgot-pass"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>
            </div>
            <Button type="submit" variant="contained">
              Sign in
            </Button>
          </div>
          <p className="no-account">
            Don’t have an account?
            <span onClick={() => navigate("/sign-up")}>Sign up</span>
          </p>
          <br />
        </form>
      </div>
    </>
  );
}
