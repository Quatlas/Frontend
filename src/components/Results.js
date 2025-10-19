import React, { useState, useRef, useEffect } from 'react'
import Header from './Header';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from "react-router-dom";
import ResultPage from './ResultPage';

const Results = () => {
    const navigate = useNavigate();
    const [res, setRes] = useState('');
    const [err, setErr] = useState('');
    const [resultData, setResultData] = useState(null)
    const loadingBarRef = useRef(null);
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
        const checkResult = async (e) => {
            e.preventDefault();
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/results/check';
                const checkResult = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        "usn": res.toUpperCase()
                    })
                });
                if (!checkResult.ok) {
                    if (checkResult.status === 500) {
                        setErr("Internal server error");
                    }
                }
                const checkData = await checkResult.json();
                loadingBarRef.current.complete();
                if (checkData.msg === 'Usn not found!!') {
                    setErr(checkData.msg);
                }
                else {
                    setResultData(checkData)
                    navigate("/resultPage",{ state: { resultData: checkData } });
                }
            } catch (error) {
                setErr(error.message || "Internal server error");
                setResultData(null);
            }
            finally {
                loadingBarRef.current.complete();
            }
        }

    return (
        <div style={style}>
            <LoadingBar color="#1e90ff" ref={loadingBarRef} height={4} />
            <Header title="QUATLAS RESULTS" />
            {err ? (
                <div className="popup error-popup">
                    <div className="popup-icon error-icon">
                        <svg
                            className="error-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div class="error-message">{err}</div>
                    <div class="popup-icon close-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            class="close-svg"
                        >
                            <path
                                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                class="close-path"
                            ></path>
                        </svg>
                    </div>
                </div>
            ) : ''}
            <form action="" className='results' onSubmit={checkResult}>
                <div className="note">
                    <p className="texas">For example, use the USN 1MS22ME002-T to search for results, and if any issues arise, please contact the captain for assistance.</p>
                </div>
                <input type="text" className="log" placeholder='Enter your usn' value={res} onChange={(e) => setRes(e.target.value)} required maxLength={12} />
                <button className="signin">Search</button>
            </form>
            {resultData && <ResultPage data={resultData} />}
        </div>

    )
}

export default Results
