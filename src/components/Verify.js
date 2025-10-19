import React, { useState, useRef } from 'react'
import Navbar02 from './Navbar02';
import Developer from './Developer';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Verify = () => {
    const navigate = useNavigate();
    const loadingBarRef = useRef(null);
    const [otp,setOtp] = useState('');
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const verifyOtp = async(e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT18}/${sessionStorage.getItem('id')}`;
            const verifyResponse = await fetch(url,{
                method:"PUT",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body:JSON.stringify({
                    "userotp":otp
                })
            });
            if(verifyResponse.ok){
                const verifyData = await verifyResponse.json();
                loadingBarRef.current.complete();
                toast.success(verifyData.msg);
                navigate("/data");
            }
            else{
                const verifyData = await verifyResponse.json();
                loadingBarRef.current.complete();
                toast.error(verifyData.msg);

            }
        } catch (error) {
            toast.error('Internal server error!');
            loadingBarRef.current.complete();
        }
    }
    return (
        <div style={style}>
            <Navbar02 />
            <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
            <div className="otp">
                <div className="otp-box">
                    <h2>OTP Verification</h2>
                    <div className="success-msg">OTP has been sent successfully!</div>
                    <p>Enter the 6-digit code sent to your email</p>
                    <form className="otp-inputs" onSubmit={verifyOtp}>
                        <input type="text" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)}/>
                        <button className="verify-btn">Verify OTP</button>
                    </form>
                </div>
            </div>
            <Developer />
        </div>
    )
}

export default Verify
