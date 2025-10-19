import React, { useState, useRef } from 'react'
import Navbar02 from './Navbar02';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import { toast } from 'react-toastify';

const Admin = () => {
    const navigate = useNavigate();
    const loadingBarRef = useRef(null);
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const [editing, setEditing] = useState(false);
    const [formUser, setFormUser] = useState({
        "NewName": sessionStorage.getItem("name") || ""
    });
    const changeUsername = () => {
        setEditing(!editing);
    }
    const updateUsername = async () => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT15}/${sessionStorage.getItem("id")}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "NewName": formUser
                })
            });
            if (response.ok) {
                const data = await response.json();
                loadingBarRef.current.complete();
                sessionStorage.setItem('name', data.username);
                setEditing(false);
                toast.success(data.msg);
            }
            else {
                const data = await response.json();
                loadingBarRef.current.complete();
                toast.error(data.msg)

            }
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal Server Error');
        }
    }
    const email = () => {
        navigate("/updateEmail");
    }
    const updatePassword = () => {
        navigate("/updatePassword");
    }
    const deleteAccount = async () => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT21}/${sessionStorage.getItem("id")}`;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            });
            if (response.ok) {
                const data = await response.json();
                loadingBarRef.current.complete();
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                sessionStorage.removeItem('id');
                navigate("/");
                toast.success(data.msg);
            }
            else {
                const data = await response.json();
                loadingBarRef.current.complete();
                toast.error(data.msg)

            }
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal Server Error');
        }
    }

    return (
        <>
            <div style={style}>
                <Navbar02 />
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Personal Info</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editing ? (
                                <>
                                    <tr>
                                        <td><input type="text" name="" id="" value={formUser.name} onChange={(e) => setFormUser(e.target.value)} /></td>
                                        <td><button className="update" onClick={updateUsername}>Save</button></td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    <tr>
                                        <td>{sessionStorage.getItem("name")}</td>
                                        <td><button className="update" onClick={changeUsername}>Update</button></td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{sessionStorage.getItem("email")}</td>
                                <td><button className="update" onClick={email}>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Password</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>*********</td>
                                <td><button className="update" onClick={updatePassword}>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="update" style={{ marginTop: "20px" }} onClick={deleteAccount}>Delete Account</button>
                </div>
                <Developer />
            </div>

        </>
    )
}

export default Admin
