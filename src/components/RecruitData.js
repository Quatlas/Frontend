import React, { useEffect, useState, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';
import { toast } from 'react-toastify';
import Developer from './Developer';
import Navbar02 from './Navbar02';


const RecruitData = () => {
    const loadingBarRef = useRef(null);
    const [dates, setDates] = useState([]);
    const [data01, setData01] = useState([]);
    const [inp, setInp] = useState(false);
    const [link, setLink] = useState('');
    const [ion, setIon] = useState([]);
    const [inp02, setInp02] = useState(false);
    const [groupLink, setGroupLink] = useState('');

    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    useEffect(() => {
        const getDates = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = process.env.REACT_APP_ENDPOINT07;
                const getResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                if (getResponse.ok) {
                    const getData = await getResponse.json();
                    setDates(getData[getData.length - 1]);
                }
                else {
                    const getData = await getResponse.json();
                    toast.error(getData.msg);
                }
                loadingBarRef.current.complete();
            } catch (error) {
                loadingBarRef.current.complete();
                toast.error("Internal server error.");
            } finally {
                loadingBarRef.current.complete();
            }
        }
        getDates();
    }, []);
    const addDates = async () => {
        const date = prompt("Enter date : ");
        const time = prompt("Enter time : ");
        const formLink = prompt("Enter form link : ");
        const project = prompt("Enter project deadline date : ");
        const result = prompt("Enter result link : ");
        loadingBarRef.current.continuousStart();
        try {
            const url = process.env.REACT_APP_ENDPOINT08;
            const addResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "date": date,
                    "time": time,
                    "formLink": formLink,
                    "project": project,
                    "result": result
                })
            });
            if (addResponse.ok) {
                const addData = await addResponse.json();
                toast.success(addData.msg);
                loadingBarRef.current.complete();
            }
            else {
                const addData = await addResponse.json();
                toast.error(addData.msg)
                loadingBarRef.current.complete();
            }
        } catch (error) {
            toast.error("Internal server error.");
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }
    const deleteDate = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT09}/${id}`;
            const deleteResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            });
            const deleteData = await deleteResponse.json();
            toast.success(deleteData.msg)
            loadingBarRef.current.complete();
        } catch (error) {
            toast.error("Internal server error");
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }

    const updateDate = async (id) => {
        const date = prompt("Enter date : ");
        const time = prompt("Enter time : ");
        const formLink = prompt("Enter form link : ");
        const project = prompt("Enter project deadline date : ");
        const result = prompt("Enter result link : ");
        let inputFields = {}
        if (date) inputFields.date = date;
        if (time) inputFields.time = time;
        if (formLink) inputFields.formLink = formLink;
        if (project) inputFields.project = project;
        if (result) inputFields.result = result;
        if (Object.keys(inputFields).length === 0) {
            toast.error("No updates provided");
            return;
        };
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT10}/${id}`;
            const updateResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(inputFields)
            });
            if (updateResponse.ok) {
                const addData = await updateResponse.json();
                toast.success(addData.msg);
                loadingBarRef.current.complete();
            }
            else {
                const addData = await updateResponse.json();
                toast.error(addData.msg);
                loadingBarRef.current.complete();
            }
        } catch (error) {
            toast.error('Internal server error');
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }
    const recruitmentFormData = async () => {
        try {
            const url = 'https://script.google.com/macros/s/AKfycbwD9n6VnW6W3YoFzBUR-1IoCeBrbuZ5fcAEeltr2D4fcHbBthRvWhNAOJQWm7j7EbGm3A/exec';
            const res = await fetch(url);
            const data = await res.json();
            toast.success('Successfully recieved recruitment form data');
            setData01(data);
        } catch (error) {
            toast.error('Internal server error');
        }
    }
    useEffect(() => {
        recruitmentFormData();
        const intervalId = setInterval(recruitmentFormData, 100000);

        return () => clearInterval(intervalId);
    }, []);

    const addLink = () => {
        setInp(!false);
    }

    const addGoogleFormData = async () => {
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/addData';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                }
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            toast.success(data.msg);
        } catch (error) {
            toast.error('Internal server error.');
            loadingBarRef.current.complete();
        }
    }

    const sendLink = async (e) => {
        e.preventDefault();
        setInp(false);
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/testLink';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'testLink': link
                })
            });
            if (!res.ok) {
                toast.error('Failed to send test link.');
                return;
            }
            const data = await res.json();
            loadingBarRef.current.complete();
            toast.success(data.msg || 'Test link sent successfully!');
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Something went wrong. Please try again.');
        }
    }
    const change = async () => {
        const date = prompt("Enter interview date:");
        const startTime = prompt('Enter the starting time for the interviews (e.g., 10:00):');
        const endTime = prompt('Enter the ending time for the interviews (e.g., 13:00):');
        const interval = prompt('Enter the duration of each interview slot in minutes (e.g., 15):');
        const capacity = prompt('Enter the number of candidates per slot:');
        const score = prompt('Enter the minimum score required to qualify for interview scheduling:');
        const inputFields = {};
        if (date) inputFields.date = date;
        if (startTime) inputFields.startTime = startTime;
        if (endTime) inputFields.endTime = endTime;
        if (interval) inputFields.interval = interval;
        if (capacity) inputFields.capacity = capacity;
        if (score) inputFields.score = score;
        if (Object.keys(inputFields).length === 0) {
            toast.error("No updates provided");
            return;
        };
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/interview';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(inputFields)
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            toast.success(data.msg);
        } catch (error) {
            toast.error('Internal server error');
            loadingBarRef.current.complete();
        }
    }
    const schedules = async () => {
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/getschedules';
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            if (data.list.length === 0) {
                toast.error("No members found");
                return;
            }
            toast.success(data.msg);
            console.log(data.list[0]._id)
            setIon(data.list[0].mails)
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal server error')
        }
    }
    useEffect(() => {
        schedules();
    }, []);

    const sendMail = async (list) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/interviewMails';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'name': list.Name,
                    'mail': list.Email,
                    'date': list["Interview Date"],
                    'time': list.Time,
                    'subsystem': list["Technical Team"] ?? list["Non Technical Team"] ?? "Not Assigned"
                })
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                loadingBarRef.current.complete();
                toast.error(data.msg);
                return;
            }
            toast.success(data.msg);
        } catch (error) {
            toast.error('Internal server error');
            loadingBarRef.current.complete();
        }
    }

    const selection = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/hiring/updateSelecttion/${id}`;
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ 'statusValue': 'yes' })
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            loadingBarRef.current.complete();
            toast.success(data.msg);
            await schedules();
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal server error');
        }
    }

    const unselect = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/hiring/updateSelecttion/${id}`;
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ 'statusValue': 'no' })
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            loadingBarRef.current.complete();
            toast.success(data.msg);
            await schedules();
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal server error');
        }
    }
    const bulkMail = async () => {
        setInp02(!inp02);
    }
    const allMail = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/finalMail';
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'groupLink': groupLink
                })
            });
            const data = await res.json();
            setInp02(false)
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            loadingBarRef.current.complete();
            toast.success(data.msg);
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal server error.');
        }
    }
    const deleteData = async () => {
        loadingBarRef.current.continuousStart();
        try {
            const url = 'https://quatlasserver.vercel.app/api/hiring/deleteHiringData';
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-type': 'application/json'
                },
            });
            const data = await res.json();
            loadingBarRef.current.complete();
            if (!res.ok) {
                toast.error(data.msg);
                loadingBarRef.current.complete();
                return;
            }
            loadingBarRef.current.complete();
            toast.success(data.msg);
        } catch (error) {
            loadingBarRef.current.complete();
            toast.error('Internal server error.');
        }
    }

    return (
        <>
            <div style={style}>
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={6} />
                <Navbar02 />
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Recruitment Dates</h2>
                        {/* <button className="update" onClick={addDates}>Add</button> */}
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Form Link</th>
                                <th>Project Deadline Time</th>
                                <th>Result Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dates.date}</td>
                                <td>{dates.time}</td>
                                <td>{dates.formLink}</td>
                                <td>{dates.project}</td>
                                <td>{dates.result}</td>
                                <td><button className="update" onClick={() => updateDate(dates._id)}>Update</button></td>
                                <td><button className="update" onClick={() => deleteDate(dates._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Recruitment Form Data</h2>
                        {inp ? (
                            <>
                                <form action="" className="ric" onSubmit={sendLink}>
                                    <input type="text" className="log" style={{ marginBottom: "10px" }} placeholder='Enter test link' value={link} onChange={(e) => setLink(e.target.value)} />
                                    <button className="update">Send test link</button>
                                </form>
                            </>
                        ) : (
                            <button className="update" onClick={addLink}>Add test link</button>
                        )}
                    </div>
                    <div className="welcome">
                        <h2 className="wlc-name" style={{ fontSize: "20px" }}>Total Applications: {data01.length}</h2>
                        <button className="update" style={{ marginTop: "10px" }} onClick={addGoogleFormData}>Add data </button>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Usn</th>
                                <th>Branch & Semester</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Technical Team</th>
                                <th>Non Technical Team</th>
                                <th>Are you</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data01.length === 0 ? (
                                <>
                                    <tr>
                                        <td>No records available!</td>
                                    </tr>
                                </>
                            ) : (
                                data01.map((recruit) =>
                                    <>

                                        <tr>
                                            <td>{recruit.Name}</td>
                                            <td>{recruit.Usn}</td>
                                            <td>{recruit["Branch & Semester"]}</td>
                                            <td>{recruit.Email}</td>
                                            <td>{recruit["Phone Number"]}</td>
                                            {recruit["Technical Team"] ? (
                                                <>
                                                    <td>{recruit["Technical Team"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Not applicable</td>
                                                </>
                                            )}
                                            {recruit["Non Technical Team"] ? (
                                                <>
                                                    <td>{recruit["Non Technical Team"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Not applicable</td>
                                                </>
                                            )}
                                            <td>{recruit['Are you']}</td>
                                        </tr>
                                    </>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Interview Schedules</h2>
                        <div className="maxima">
                            <button className="update" onClick={change}>Schedule Interviews</button>
                            <button className="update" onClick={deleteData}>Delete Data</button>
                        </div>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Branch & Semester</th>
                                <th>Technical Team</th>
                                <th>Non Technical Team</th>
                                <th>Interview Date</th>
                                <th>Interview Time</th>
                                <th>Mail</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ion.length === 0 ? (
                                <>
                                    <tr>
                                        <td>No record available!</td>
                                    </tr>
                                </>
                            ) : (
                                ion.map((extract) =>
                                    <>
                                        <tr>
                                            <td>{extract.Name}</td>
                                            <td>{extract["Branch & Semester"]}</td>
                                            {extract["Technical Team"] ? (
                                                <>
                                                    <td>{extract["Technical Team"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Not applicable</td>
                                                </>
                                            )}
                                            {extract["Non Technical Team"] ? (
                                                <>
                                                    <td>{extract["Non Technical Team"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Not applicable</td>
                                                </>
                                            )}
                                            {extract["Interview Date"] ? (
                                                <>
                                                    <td>{extract["Interview Date"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Awaiting scheduling</td>
                                                </>
                                            )}
                                            {extract.Time ? (
                                                <>
                                                    <td>{extract.Time}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Awaiting scheduling</td>
                                                </>
                                            )}
                                            {extract["Interview Date"] ? (
                                                <>
                                                    <td><button className="update" onClick={() => sendMail(extract)}>Send Mail</button></td>
                                                </>
                                            ) : (
                                                <>
                                                    <tr>
                                                        <td>Awaiting scheduling</td>
                                                    </tr>
                                                </>
                                            )}
                                            {extract["Interview Date"] ? (
                                                <>
                                                    {extract.Status === 'no' || extract.Status === '' ? (
                                                        <>
                                                            <td><button className="update" onClick={() => selection(extract._id)}>Select</button></td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td><button className="update" onClick={() => unselect(extract._id)}>Unselect</button></td>
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                <>

                                                    <td>Awaiting scheduling</td>

                                                </>
                                            )}
                                        </tr>
                                    </>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Final Selection List</h2>
                        {inp02 ? (
                            <>
                                <form action="" onSubmit={allMail}>
                                    <input type="text" name="" id="" className="log" style={{ marginBottom: "10px" }} placeholder='Enter group link' value={groupLink} onChange={(e) => setGroupLink(e.target.value)} />
                                    <button className="update">Send Mail</button>
                                </form>
                            </>
                        ) : (
                            <button className="update" onClick={bulkMail}>Send Mail</button>
                        )}
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ion.some((extract) => extract.Status === 'yes') ? (
                                ion
                                    .filter((extract) => extract.Status === 'yes')
                                    .map((extract) => (
                                        <tr key={extract._id}>
                                            <td>{extract.Name}</td>
                                            <td>{extract["Branch & Semester"]}</td>
                                            {extract["Technical Team"] ? (
                                                <>
                                                    <td>{extract["Technical Team"]}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>{extract["Non Technical Team"]}</td>
                                                </>
                                            )}
                                            <td>{extract.Email}</td>
                                            <td>{extract["Phone Number"]}</td>
                                        </tr>
                                    ))
                            ) : (
                                <tr>
                                    <td colSpan="2">Awaiting selection</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <Developer />
            </div >
        </>
    )
}

export default RecruitData
