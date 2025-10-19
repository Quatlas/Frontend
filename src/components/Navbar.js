import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

   
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        navigate('/')
    }

    return (
        <nav className='quatlas-005'>
            <div className="quatlas-logo">
                <img src="/images/quatlas.webp" alt="Logo" />
            </div>
            <ul className="quatlas-nav-links">
                <li><Link to="/" id="active">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/alumini">Alumni</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                {sessionStorage.token ? <li><Link to="/" onClick={logout}>{sessionStorage.getItem('name')}</Link></li> : <li><Link to="/login">Login</Link></li>}
            </ul>
            <div className="hamburger" onClick={toggleModal}>
                <i className="fa fa-bars"></i>
            </div>
            <div className={`quatlas-modal ${isModalOpen ? 'show' : ''}`} id="quatlas-modal">
                <div className="close-btn" onClick={toggleModal}><i className="fa fa-times"></i></div>
                <Link to="/">Home</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/alumini">Alumni</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/login">{sessionStorage.token ? sessionStorage.getItem('name') : 'Login'}</Link>
            </div>
        </nav>
    );
};

export default Navbar;
