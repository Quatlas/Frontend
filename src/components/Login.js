import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header';
import LoadingBar from 'react-top-loading-bar';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();
  const loadingBarRef = useRef(null);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const style = {
    backgroundColor: '#e6e6fa',
    minHeight: "100vh",
  };

  const Sign = async (e) => {
    e.preventDefault();
    loadingBarRef.current.continuousStart();
    try {
      const url = process.env.REACT_APP_ENDPOINT06;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({
          "email": email,
          "password": pass
        })
      })
      const data = await response.json();
      loadingBarRef.current.complete();
      if (response.status === 400) {
        toast.error(data.error);
        loadingBarRef.current.complete()
      }
      else {
        sessionStorage.setItem('token', data.authToken);
        navigate("/Data");
      }

    } catch (error) {
      loadingBarRef.current.complete()
      toast.error(error);
    }
  }
  const redirect = () => {
    navigate("/resetPassword")
  }
  const register = () => {
    navigate("/signup");
  }

  return (
    <>
      <div className="kox" style={style}>
        <Header title="QUATLAS AUTHORIZATION" />
        <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
        <div className="lo2">
          <div className="form-container">
          <p className="title">Login</p>
          <form className="form" onSubmit={Sign}>
            <div className="input-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter Your Password" value={pass} onChange={(e) => setPass(e.target.value)} required/>
              <div className="forgot">
                <button rel="noopener noreferrer" onClick={redirect} type={'button'}>Forgot Password ?</button>
              </div>
            </div>
            <button className="sign">Sign in</button>
          </form>
          <p className="hux">Or</p>
          <button className="sign" onClick={register}>Sign Up</button>
        </div>
      </div>
        </div>
      <div className="etios">
        <p className="msg">2024 © Quatlas, All Rights Reserved.</p>
        <p className="msg">Designed By Pavan Reddy</p>
        <p className="msg">Powered By Madhouse</p>
      </div>
    </>
  )
}

export default Login
