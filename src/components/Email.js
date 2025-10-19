import React, { useState,useRef } from 'react'
import Navbar02 from './Navbar02';
import Developer from './Developer';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Email = () => {
    const navigate = useNavigate();
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const [email, setEmail] = useState('');
    const loadingBarRef = useRef(null);
    const verifyEmail = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT16}/${sessionStorage.getItem("id")}`;
            const emailResponse = await fetch(url,{
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body:JSON.stringify({
                    "NewEmail":email,
                    "NewPassword":"",
                    "Purpose":"email-change"
                })
            });
            if(emailResponse.ok){
                const emailData = await emailResponse.json();
                loadingBarRef.current.complete();
                toast.success(emailData.msg);
                navigate("/verify");
            }
            else{
                const emailData = await emailResponse.json();
                loadingBarRef.current.complete();
                toast.error(emailData.msg);
            }

        } catch (error) {
            toast.error('Internal server error!');
            loadingBarRef.current.complete()
        }
    }
    return (
        <div style={style}>
            <Navbar02 />
            <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
            <div className="update-email">
                <div className="up-info">
                    <h2 className="up-head">Email</h2>
                    <p className="up-para">You’ll use this email to receive messages, sign in, and recover your account.</p>
                </div>
                <form action="" className="email-update">
                    <input type="text" className="up-email-inp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your New Email'/>
                    <p className="up-err-suc">A verification code will be sent to this email</p>
                    <button className="up-email-btn" onClick={verifyEmail}>Update</button>
                </form>
            </div>
            <Developer />
        </div>
    )
}

export default Email
