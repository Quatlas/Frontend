import React, { useState, useEffect, useRef } from 'react'
import Navbar02 from './Navbar02';
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';
import { toast } from 'react-toastify';

const Links = () => {
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    const loadingBarRef = useRef(null);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [getData, setGetData] = useState([]);
    const addLink = async (e) => {
        e.preventDefault();
        try {
            loadingBarRef.current.continuousStart();
            const url = 'https://quatlasserver.vercel.app/api/links/add';
            const linkResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "name": name,
                    "link": link
                })
            })
            if (!linkResponse.ok) {
                const linkData = await linkResponse.json();
                loadingBarRef.current.complete();
                toast.error(linkData.msg);
                setName('');
                setLink('');
                
            }
            else {
                const linkData = await linkResponse.json();
                loadingBarRef.current.complete();
                toast.success(linkData.msg);
                setName('');
                setLink('')
            }
        } catch (error) {
            toast.error("Internal server error.Try again by logging again", error.message);
            loadingBarRef.current.complete();
            console.log(error.message)
            
        }
    }
    useEffect(() => {
        const get = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/links/getLinks';
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
                    console.log(getData)
                    setGetData(getData)
                    loadingBarRef.current.complete();
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
            const name = prompt("Enter name : ");
            const link = prompt("Enter link : ");
            const updateFields = {};
            if (name) updateFields.name = name;
            if (link) updateFields.link = link;
            if (Object.keys(updateFields).length === 0) {
                toast.error("No updates provided");
                
                loadingBarRef.current.complete();
                return;
            };
            const url = `https://quatlasserver.vercel.app/api/links/update/${id}`;
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
                loadingBarRef.current.complete()
            }
        } catch (error) {
            toast.error("Internal server error.Try again by logging again");
            loadingBarRef.current.complete();
            

        }

    }
    const deleteData = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/links/delete/${id}`;
            const deletedResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            })
            if (!deletedResponse.ok) {
                const deletedData = await deletedResponse.json();
                toast.error(deletedData.msg);
                loadingBarRef.current.complete();
                
            }
            else {
                const deletedData = await deletedResponse.json();
                toast.success(deletedData.msg);
                loadingBarRef.current.complete();
                toast.error("");
            }
        } catch (error) {
            toast.error("Internal server error.Try again by logging again");
            
            loadingBarRef.current.complete();
        }
    }
    const lot = (link) => {
        window.location.href = link;
    }
    return (
        <>
            <div style={style}>
                <Navbar02 />
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} /> 
                <form action="" class='addNote' onSubmit={addLink}>
                    <input type="text" class="log" required="" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter link' value={link} onChange={(e) => setLink(e.target.value)} />
                    <button class="signin">Submit</button>
                </form>

                <div class="quatlas-table-container">
                    <h2 className="wlc-name">All Links</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>View</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getData.map((details) =>
                                <>
                                    <tr>
                                        <td>{details.name}</td>
                                        <td><button className="update" onClick={() => lot(details.link)}>View</button></td>
                                        <td><button className="update" onClick={() => updateData(details._id)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteData(details._id)}>Delete</button></td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
               <Developer/>
            </div>
        </>
    )
}

export default Links
