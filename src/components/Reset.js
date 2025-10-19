import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import { toast } from 'react-toastify';
import Header from './Header';

const Reset = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const loadingBarRef = useRef(null);
  const [email, setEmail] = useState('');
  const style = {
    backgroundColor: '#e6e6fa',
    minHeight: "100vh",
  };
  const reset = async (e) => {
    e.preventDefault();
    loadingBarRef.current.continuousStart();
    try {
      const url = `${process.env.REACT_APP_ENDPOINT17}`;
      const emailResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "userEmail": email,
          "newPassword": pass,
        })
      });
      if (emailResponse.ok) {
        const emailData = await emailResponse.json();
        loadingBarRef.current.complete();
        toast.success(emailData.msg);
        navigate("/verifyUser");
        
      }
      else {
        const emailData = await emailResponse.json();
        loadingBarRef.current.complete();
        setEmail('');
        setPass('');
        toast.error(emailData.msg);
      }

    } catch (error) {
      toast.error('Internal server error!');
      loadingBarRef.current.complete()
      setEmail('');
      setPass('');
    }
  }
  return (
    <div style={style}>
      <Header title="QUATLAS AUTHORIZATION" />
      <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />

      <div className="update-email">
        <div className="up-info-02">
          <h2 className="up-head">Reset Password</h2>
          <p className="up-para">You’ll use this password to sign in, and recover your account.</p>
        </div>
        <form action="" className="email-update" style={{ gap: "20px" }} onSubmit={reset}>
          <input type="text" className="up-email-inp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your registered email' />
          <input type="text" className="up-email-inp" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your New Password' />
          <p className="up-err-suc">A verification code will be sent to your registered email to reset your password.</p>
          <button className="up-email-btn" >Reset</button>
        </form>
      </div>
      <Developer />
    </div>
  )
}

export default Reset
