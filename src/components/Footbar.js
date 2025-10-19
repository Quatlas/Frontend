import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="quatlas-footer-section">
        <img src="/images/quatlas.webp" alt="Quatlas Logo" className="quatlas-gp" />
        <p className="quatlas-ds">
          Quatlas, a distinguished Aerospace Modelling group hailing from Ramaiah Institute of Technology in Bangalore, Karnataka IN.
        </p>
        <div className="quatlas-icons">
          <a href="https://www.instagram.com/quatlasaeromodelling" className="quatlas-ic01">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/quatlas" className="quatlas-ic02">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/quatlas-aeromodelling" className="quatlas-ic03">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@QuatlasAeromodellingMSRIT" className="quatlas-ic04">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="mailto:aeromodellingquatlas@gmail.com" className="quatlas-ic05">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="quatlas-footer-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/privacy">PRIVACY</Link></li>
          <li><Link to="/terms">TERMS OF USE</Link></li>
        </ul>
        <h3 style={{ marginTop: '20px' }}>SPONSORS</h3>
        <ul>
          <li><Link to="/sponsors">SPONSORS</Link></li>
          <li><Link to="/">QUERY</Link></li>
        </ul>
      </div>

      <div className="quatlas-footer-section">
        <h3>ABOUT</h3>
        <ul>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><a href="https://www.msrit.edu/department/faculty-detail.html?dept=me&ID=44">FACULTY</a></li>
          <li><Link to="/about">TEAM</Link></li>
        </ul>
        <h3 style={{ marginTop: '20px' }}>CROWDFUNDING</h3>
        <ul>
          <li><Link to="/crowdfunding">PAY VIA UPI</Link></li>
          <li><Link to="/crowdfunding">INFO</Link></li>
        </ul>
      </div>

      <div className="quatlas-footer-section">
        <h3>EVENTS</h3>
        <ul>
          <li><Link to="/recruitment">RECRUITMENT</Link></li>
        </ul>
        <h3 style={{ marginTop: '20px' }}>ADDRESS</h3>
        <ul>
          <li>
            <p className="quatlas-para">
              RAMAIAH INSTITUTE OF TECHNOLOGY
              <br />
              M S RAMAIAH NAGAR,
              <br />
              MATHIKERE,
              <br />
              BENGALURU,
              <br />
              KARNATAKA IN 560054
            </p>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/4qKM3Hg6Sv5HNQHJ7" className="quatlas-spc">LOCATE ON MAP</a>
          </li>
        </ul>
      </div>
    </footer>
    <hr/>
    <div class="quatlas-ft-bt">
        <p class="quatlas-ir">{new Date().getFullYear()} © Quatlas, All Rights Reserved.</p>
        <p className="quatlas-ir">Designed And Developed By Pavan Reddy</p>
    </div>
    </>
  );
};

export default Footer;
