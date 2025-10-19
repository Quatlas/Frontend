import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar02 = () => {
    const [Open, setOpen] = useState(false);
    const navigate = useNavigate();
    const toggle = () => {
        setOpen(!Open);
    };
    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        navigate("/");
    }

    return (
        <nav className="quatlas-04">
            <div className="quatlas-30">
                <div className="quatlas-of">
                    <h1 className="quatlas-0041">Quatlas Dashboard</h1>
                </div>
                <div className="quatlas-0042">
                    <ul className="quatlas-0043">
                        <li><Link to="/data">Home</Link></li>
                        <li><Link to="/recruitdata">Recruitment</Link></li>
                        <li><Link to="/forms">Forms & Sponsors</Link></li>
                        <li><Link to="/team">Team Data</Link></li>
                        <li><Link to="/links">Links</Link></li>
                        <li><Link to="/admin">Account</Link></li>
                        <li><Link to="/" onClick={logout}>{sessionStorage.token ? 'Logout' : 'Login'}</Link></li>
                    </ul>

                    <button className="hams-01" onClick={toggle}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>

                <div className={`quatlas-0045 ${Open ? 'mobile-open' : ''}`}>
                    <button className="hams-02" onClick={toggle}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul className="quatlas-0044">
                        <li><Link to="/data">Home</Link></li>
                        <li><Link to="/recruitdata">Recruitment</Link></li>
                        <li><Link to="/forms">Forms & Sponsors</Link></li>
                        <li><Link to="/team">Team Data</Link></li>
                        <li><Link to="/links">Links</Link></li>
                        <li><Link to="/admin">Account</Link></li>
                        <li><Link to="/" onClick={logout}>{sessionStorage.token ? 'Logout' : 'Login'}</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar02;
