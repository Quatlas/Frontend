import React, { useState, useRef } from 'react'
import Header from './Header';
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import { toast } from 'react-toastify';

const Signup = () => {
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const loadingBarRef = useRef(null);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    const SignUp = async (e) => {
    e.preventDefault();
    loadingBarRef.current.continuousStart();
    try {
        const url = `${process.env.REACT_APP_ENDPOINT20}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: user,
                email: email,
                password: pass
            })
        });

        const data = await response.json();
        loadingBarRef.current.complete();

        if (!response.ok) {
            toast.error(data?.error || data?.msg || "An unknown error occurred.");
        } else {
            toast.success(data?.msg || "Signed up successfully!");
            setUser('');
            setEmail('');
            setPass('');
        }

    } catch (error) {
        loadingBarRef.current.complete();
        toast.error("Network error: " + error.message);
    }
}

    return (
        <div style={style}>
            <Header title="QUATLAS AUTHORIZATION" />
            <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
            <div className="lo2">
                <div className="form-container">
                    <p className="title">Signup</p>
                    <form className="form" onSubmit={SignUp} style={{paddingBottom:"150px"}}>
                        <div className="input-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Enter Your Username" value={user} onChange={(e) => setUser(e.target.value)} required />
                        </div>
                        <div className="input-group">
                            <label for="password">Email</label>
                            <input type="email" name="password" id="password" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter Your Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
                        </div>
                        <br />
                        <button className="sign">Sign Up</button>
                    </form>
                </div>
            </div>
            <Developer/>
        </div>
    )
}

export default Signup
