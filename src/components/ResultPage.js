import React from 'react';
import Header from './Header';
import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const { resultData } = location.state || {};
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    return (
        <div style={style}>
            <Header title="QUATLAS RESULTS" />
            <div className="res-hox">
                <h2 className="wlc-name gox">Congratulations</h2>
                {resultData && resultData.status.toLowerCase() === 'selected' ? (
                    <p className="olp">
                        {resultData.name + `(${resultData.usn}) ` + 'you are selected for an interview round for the Quatlas Aeromodelling team in the role of ' + resultData.role + " and your test score is " + resultData.score + ". Interview timings and dates will be announced shortly."}
                    </p>
                ) : (
                    <p className='olp'>
                        Sorry to inform you that you have not been selected for an interview
                    </p>
                )}
            </div>
        </div>
    );
}

export default ResultPage;
