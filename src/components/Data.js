import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import Navbar02 from './Navbar02';
import { toast } from 'react-toastify';

const Data = () => {
    const navigate = useNavigate();
    const loadingBarRef = useRef(null);
    const [dashName, setDashname] = useState('');
    const [addTeamName,setAddTeamName] = useState('');
    const [teamHead, setTeamhead] = useState([]);
    const [temp, setTemp] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [addname, setAddname] = useState('');
    const [addrole, setAddrole] = useState('');
    const [addimage, setAddimage] = useState('')
    const [user, setUser] = useState('');
    const [inp, setInp] = useState(false);
    const [link, setLink] = useState('');
    const [addlinkedin, setAddlinkeidn] = useState('');
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    useEffect(() => {
        const dash = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const dashUrl = process.env.REACT_APP_ENDPOINT02;
                const dashResponse = await fetch(dashUrl, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                    },
                });
                if (dashResponse.ok) {
                    const dashData = await dashResponse.json();
                    loadingBarRef.current.complete();
                    let name = dashData.username;
                    sessionStorage.setItem('name', name);
                    sessionStorage.setItem('email', dashData.email);
                    sessionStorage.setItem('id', dashData.id);
                    setUser(name);
                    setDashname("WELCOME " + name.toUpperCase());
                    toast.success('Successfully received the data. Update or add any changes as needed.')
                } else {
                    const dashData = await dashResponse.json();
                    const jwt = dashData.error;
                    loadingBarRef.current.complete();
                    toast.error(jwt.toUpperCase() + " : SIGN IN AGAIN");
                }
            } catch (error) {
                toast.error('Internal server error.');
                loadingBarRef.current.complete();
            }
        }
        dash();
    }, [])
    useEffect(() => {
        const fetchNotes = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/members/memberData';
                const addedResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    }
                });
                if (!addedResponse.ok) {
                    toast.error('Internal server error try logging again');
                }
                const addedData = await addedResponse.json();
                loadingBarRef.current.complete();
                setTeamhead(addedData[0].teams);

            } catch (error) {
                toast.error('Internal server error try logging again');
                loadingBarRef.current.complete();
            }
        }
        fetchNotes();
    }, []);

    const updateTeamInfo = async (id, namemax) => {
        loadingBarRef.current.continuousStart();
        try {
            const name = prompt("enter name : ");
            const role = prompt("enter role : ");
            const img = prompt("enter image link : ");
            const linkedin = prompt("enter linkedin link : ");
            const updateFields = {};
            if (name) updateFields.name = name;
            if (role) updateFields.role = role;
            if (img) updateFields.img = img;
            if (linkedin) updateFields.linkedin = linkedin;
            if (Object.keys(updateFields).length === 0) {
                toast.error("No updates provided");
                return;
            };

            const url = `https://quatlasserver.vercel.app/api/members/updateMember/${id}`;
            const updatedResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(updateFields)
            });
            if (!updatedResponse.ok) {
                toast.error('Internal server error try logging again');
            }
            const updatedData = await updatedResponse.json();
            loadingBarRef.current.complete();
            toast.success(`Successfully updated ${user},${name} data has been updated. Please refresh the page to see the changes`);
        } catch (error) {
            toast.error(error);
            
            loadingBarRef.current.complete();
        }
    }
    const deleteTeamInfo = async (id, name) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/members/deleteMember/${id}`;
            const deletedResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            if (!deletedResponse.ok) {
                toast.error('Internal server error try logging again');
                
            }
            const deletedData = await deletedResponse.json();
            loadingBarRef.current.complete();
            toast.success(`Successfully deleted data.`);
        } catch (error) {
            toast.error(error);
            
            loadingBarRef.current.complete();
        }
    }
    const selectedChange = (e) => {
        setTemp(e.target.value);
    }
    const addNote = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/members/addMember`;
            const addedResponse = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "roleName":addTeamName,
                    "name": addname,
                    "role": addrole,
                    "img": addimage,
                    "linkedin": addlinkedin
                })
            });
            if (!addedResponse.ok) {
                toast.error('Internal server error try logging again');
                
            }
            const addedData = await addedResponse.json();
            loadingBarRef.current.complete();
            toast.success(`Successfully added ${addname} to teamInfo data`);
            setAddTeamName('');
            setAddname('');
            setAddrole('');
            setAddimage('');
            setAddlinkeidn('');
        } catch (error) {
            toast.error(error);
            
            loadingBarRef.current.complete();
        }
    };
    const logout = () => {
        loadingBarRef.current.complete();
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        navigate("/login");
    }
    const recruit = () => {
        navigate("/recruitmentData");
    }
    useEffect(() => {
        const fetchNotes = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/gallery/images';
                const addedResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    }
                });
                if (!addedResponse.ok) {
                    toast.error('Internal server error try logging again');
                    
                }
                const addedData = await addedResponse.json();
                setGallery(addedData);
                loadingBarRef.current.complete();

            } catch (error) {
                toast.error('Internal server error try logging again');
                
                loadingBarRef.current.complete();
            }
        }
        fetchNotes();
    }, []);
    const add = () => {
        setInp(!false)
    }
    const AddImage = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/gallery/addImage`;
            const addedResponse = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "img": link
                })
            });
            if (!addedResponse.ok) {
                toast.error('Internal server error try logging again');
                
            }
            const addedData = await addedResponse.json();
            loadingBarRef.current.complete();
            toast.success(`Successfully added image`);
            setInp(false);
        } catch (error) {
            toast.error(error);
            
            setInp(false);
            loadingBarRef.current.complete();
        }
    };
    const deleteImage = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/gallery/delete/${id}`;
            const addedResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            });
            if (!addedResponse.ok) {
                toast.error('Internal server error try logging again');
                
            }
            const addedData = await addedResponse.json();
            loadingBarRef.current.complete();
            toast.success(`Successfully deleted image.`);

        } catch (error) {
            toast.error(error);
            loadingBarRef.current.complete();
        }
    };
    return (
        <>
            <div style={style}>
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} />
                <Navbar02 />
                <div className="welcome">
                    <h2 className="wlc-name1">{dashName}</h2>
                    {/* <button className="update" onClick={recruit}>Recruitment Datas</button>
                    <button className="update" onClick={logout}>Logout</button> */}
                </div>
                <form action="" class='addNote' onSubmit={addNote}>
                    <input type="text" class="log" required="" placeholder='Enter Team Name' value={addTeamName} onChange={(e) => setAddTeamName(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter name' value={addname} onChange={(e) => setAddname(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter role' value={addrole} onChange={(e) => setAddrole(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter image link' value={addimage} onChange={(e) => setAddimage(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter Link' value={addlinkedin} onChange={(e) => setAddlinkeidn(e.target.value)} />
                    <button class="signin">Submit</button>
                </form>
                {teamHead.map((roles) =>
                    <>
                        <div class="quatlas-table-container">
                            <h2 className="wlc-name">{roles.roleName}</h2>
                            <table class="styled-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Image Link</th>
                                        <th>Linkedin Link</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.roleData.length === 0 ? (
                                        <tr>
                                            <td>No record available!</td>
                                        </tr>
                                    ) : (
                                        roles.roleData.map((member) =>

                                            <>
                                                <tr>
                                                    <td>{member.name}</td>
                                                    <td>{member.role}</td>
                                                    <td>{member.img}</td>
                                                    <td>{member.linkedin}</td>
                                                    <td><button className="update" onClick={() => updateTeamInfo(member._id)}>Update</button></td>
                                                    <td><button className="update" onClick={() => deleteTeamInfo(member._id)}>Delete</button></td>
                                                </tr>
                                            </>
                                        )
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
                <div class="quatlas-table-container">
                    <div className="ux">
                        <h2 className="wlc-name">Gallery</h2>
                        {inp ? (
                            <form action="" className="addimage" onSubmit={AddImage}>
                                <input type="text" className='log' value={link} onChange={(e) => setLink(e.target.value)} />
                                <button className="update" style={{ marginTop: "20px" }}>Save</button>
                            </form>
                        ) : (
                            <><button className="update" onClick={add}>Add</button></>
                        )}
                    </div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Image Link</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gallery.length === 0 ? (
                                <tr>
                                    <td>No record available!</td>
                                </tr>
                            ) : (
                                gallery.map((image) =>
                                    <>
                                        <tr>
                                            <td>{image.img}</td>
                                            <td><button className="update" onClick={() => deleteImage(image._id)}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <Developer />
            </div >
        </>
    )
}

export default Data
