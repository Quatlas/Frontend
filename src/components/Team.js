import React, { useState, useEffect,useRef } from 'react'
import Navbar02 from './Navbar02';
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import { toast } from 'react-toastify';

const Team = () => {
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const [name, setName] = useState('');
    const [usn, setUsn] = useState('');
    const [number, setNumber] = useState('');
    const [year, setYear] = useState('');
    const [getData, setGetData] = useState([]);
    const [role,setRole] = useState('');
    const loadingBarRef = useRef(null);

    const addTeam = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            if(name.length < 1 || usn.length < 1 || year.length < 1 || number.length < 1 || role.length < 1){
                toast.error("All fields are required. Please fill in every input.");
                return;
            }
            const url = 'https://quatlasserver.vercel.app/api/teams/add';
            const teamResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "year": year,
                    "name": name,
                    "usn": usn,
                    "role":role,
                    "phoneNumber": number,
                })
            });
            if (!teamResponse.ok) {
                const teamData = await teamResponse.json();
                toast.error(teamData.msg);
                loadingBarRef.current.complete();
                return;
            }
            const teamData = await teamResponse.json();
            setName('');
            setYear('');
            setNumber('');
            setUsn('');
            toast.success(teamData.msg);
            loadingBarRef.current.complete();
        } catch (error) {
            toast.error("Internal server error.Try again by logging again");
            loadingBarRef.current.complete()
        }
    }
    useEffect(() => {
        const get = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/teams/list';
                const getResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                    },
                });
                if (!getResponse.ok) {
                    const getData = await getResponse.json();
                    toast.error(getData.msg);
                    loadingBarRef.current.complete();

                }
                else {
                    const getData = await getResponse.json();
                    setGetData(getData.data[0].teams);
                    loadingBarRef.current.complete();
    ;
                }
            } catch (error) {
                toast.error("Internal server error.Try again by logging again");
                loadingBarRef.current.complete();
            }
        }
        get()
    }, []);

    const updateData = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const year = prompt("Enter year : ");
            const name = prompt("Enter name : ");
            const usn = prompt("Enter usn : ");
            const role = prompt("Enter role : ");
            const phoneNumber = prompt("Enter phoneNumber : ");
            const updateFields = {};
            if (name) updateFields.name = name;
            if (year) updateFields.year = year;
            if (usn) updateFields.usn = usn;
            if (role) updateFields.role = role;
            if (phoneNumber) updateFields.phoneNumber = phoneNumber;
            if (Object.keys(updateFields).length === 0) {
                toast.error("No updates provided");
                loadingBarRef.current.complete();
                return;
            };
            const url = `https://quatlasserver.vercel.app/api/teams/update/${id}`;
            const updatedResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(updateFields)
            });
            if (!updatedResponse.ok) {
                const updatedData = await updatedResponse.json();
                toast.error(updatedData.msg);
                loadingBarRef.current.complete();
            }
            else {
                const updatedData = await updatedResponse.json();
                toast.success(updatedData.msg);
                loadingBarRef.current.complete();
;
            }
        } catch (error) {
            toast.error("Internal server error.Try again by logging again");
            loadingBarRef.current.complete()

        }

    }
    const deleteData = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/teams/delete/${id}`;
            const deletedResponse = await fetch(url,{
                method:"DELETE",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            })
            if(!deletedResponse.ok){
                const deletedData = await deletedResponse.json();
                toast.error(deletedData.msg);
                loadingBarRef.current.complete();
            }
            else{
                const deletedData = await deletedResponse.json();
                toast.success(deletedData.msg);
                loadingBarRef.current.complete();
                toast.error("");
            }
        } catch (error) {
            toast.error("Internal server error.Try again by logging again")
            loadingBarRef.current.complete();
        }
    }
    return (
        <>
            <div style={style}>
                <Navbar02 />
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} /> 
                <form action="" class='addNote' onSubmit={addTeam}>
                    <input type="text" class="log" required="" placeholder='Enter year' value={year} onChange={(e) => setYear(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter usn' value={usn} onChange={(e) => setUsn(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter role' value={role} onChange={(e) => setRole(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    <button class="signin">Submit</button>
                </form>
                {getData.map((list) =>
                    <>
                        <div class="quatlas-table-container">
                            <h2 className="wlc-name">{list.year}-Batch</h2>
                            <table class="styled-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Usn</th>
                                        <th>Role</th>
                                        <th>Phone Number</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.recruitedNames.map((details) =>
                                        <>
                                            <tr>
                                                <td>{details.name}</td>
                                                <td>{details.usn}</td>
                                                <td>{details.role}</td>
                                                <td>{details.phoneNumber}</td>
                                                <td><button className="update" onClick={() => updateData(details._id)}>Update</button></td>
                                                <td><button className="update" onClick={() => deleteData(details._id)}>Delete</button></td>
                                            </tr>
                                        </>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </>
                )}
                <Developer/>
            </div >
        </>
    )
}

export default Team
