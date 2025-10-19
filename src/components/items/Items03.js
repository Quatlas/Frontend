import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Items03 = () => {
  return (
    <>
      <div className="quatlas-inf">
        <h1 className="quatlas-inf01">Our Team</h1>
        <p className="quatlas-inf02">
          Embark on an exciting career journey with Quatlas today!
          <br />
          Exploring the endless skies, one propeller at a time
        </p>
        {/* <a href="" className="quatlas-rd">Skyward Squadron<i className="fa-regular fa-share-from-square" style={{ marginLeft: 15 }}></i></a> */}
        <div className="quatlas-rd">
          <Link
            style={{ '--clr': '#282936' }}
            className="button"
            to="/about"
          >
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
              <svg
                className="button__icon-svg button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
            </span>
            Learn More
          </Link>
        </div>
      </div>

      <div className="quatlas-inf">
        <h1 className="quatlas-inf01">Crowd Funding</h1>
        <p className="quatlas-inf02">
          Support our mission to innovate and create new possibilities
          <br />
          in aerospace modeling. Your contribution will help us push the
          <br />
          boundaries of technology and design, shaping the future of the
          industry.
        </p>
        <div className="quatlas-rd">
          <Link
            style={{ '--clr': '#282936' }}
            className="button"
            to="/crowdfunding"
          >
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
              <svg
                className="button__icon-svg button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
            </span>
            Learn More
          </Link>
        </div>
      </div>

      <div className="quatlas-sps">
        <h1 className="quatlas-sps01">Official Supporters</h1>
        <p className="quatlas-sps02">
          Join us in pioneering the future of aerospace modeling.
          <br />
          Sponsor our project and gain access to unique opportunities
          <br />
          and advanced technological insights.
        </p>
        <div className="quatlas-rd">
          <Link
            style={{ '--clr': '#282936' }}
            className="button"
            to="/sponsors"
          >
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
              <svg
                className="button__icon-svg button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
            </span>
            Learn More
          </Link>
        </div>
        <div className="quatlas-sponsor">
          <img src="/images/ramaiah.png" alt="" className="quatlas-img-01" />
          <img src="/images/smart.png" alt="" className="quatlas-img-01" />
          <img src="/images/sps01.png" alt="" className="quatlas-img-01" />
          <img src="/images/dhd.png" alt="" className="quatlas-img-01" />
        </div>
      </div>
    </>
  );
};

export default Items03;
