import React, { useEffect, useState, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';
import Navbar02 from './Navbar02'
import Developer from './Developer';
import { toast } from 'react-toastify';


const Forms = () => {
  const loadingBarRef = useRef(null);
  const [con, setCon] = useState([]);
  const [sp, setSp] = useState([]);
  const [inp, setInp] = useState();
  const [img, setImg] = useState();
  const [link, setLink] = useState();
  const [sps, setSps] = useState([]);
  const style = {
    backgroundColor: '#e6e6fa',
    minHeight: "100vh",
  };
  useEffect(() => {
    const contactData = async () => {
      loadingBarRef.current.continuousStart();
      try {
        const url = process.env.REACT_APP_ENDPOINT11;
        const conRes = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-type": "application/json",
          }
        });
        if (!conRes.ok) {
          throw new Error(`Error: ${conRes.status} ${conRes.statusText}`);
        }
        const conData = await conRes.json();
        setCon(conData);
        loadingBarRef.current.complete();
      } catch (error) {
        toast.error(error.message)
        loadingBarRef.current.complete();
      } finally {
        loadingBarRef.current.complete();
      }
    }
    contactData();
  }, []);
  useEffect(() => {
    const sponsorData = async () => {
      loadingBarRef.current.continuousStart();
      try {
        const url = process.env.REACT_APP_ENDPOINT12;
        const spRes = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-type": "application/json",
          }
        });
        if (!spRes.ok) {
          throw new Error(`Error: ${spRes.status} ${spRes.statusText}`);
        }
        const spData = await spRes.json();
        setSp(spData);
        loadingBarRef.current.complete();
      } catch (error) {
        toast.error(error.message)
        loadingBarRef.current.complete();
      } finally {
        loadingBarRef.current.complete();
      }
    }
    sponsorData();
  }, []);
  const addInfo = () => {
    setInp(!inp);
  }
  const jux = async () => {
      loadingBarRef.current.continuousStart();
      try {
        const url = 'https://quatlasserver.vercel.app/api/spslist/items';
        const spRes = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-type": "application/json",
          }
        });
        if (!spRes.ok) {
          loadingBarRef.current.complete();
          const spData = await spRes.json();
          toast.error(spData.msg);
          return;
        }
        const spData = await spRes.json();
        setSps(spData);
        loadingBarRef.current.complete();
      } catch (error) {
        toast.error(error.message)
        loadingBarRef.current.complete();
      } finally {
        loadingBarRef.current.complete();
      }
    }
  useEffect(() => {
    jux();
  }, [])
  const sponsor = async (e) => {
    e.preventDefault();
    loadingBarRef.current.continuousStart();
    try {
      const url = 'https://quatlasserver.vercel.app/api/spslist/addItems';
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          'img': img,
          'link': link
        })
      });
      if (!res.ok) {
        const data = await res.json();
        toast.error(data.msg);
        setInp(false);
        loadingBarRef.current.complete();
        return;
      }
      const data = await res.json();
      loadingBarRef.current.complete();
      toast.success(data.msg);
      setInp(false)
    } catch (error) {
      loadingBarRef.current.complete();
      setInp(false);
      toast.error('Internal server error')
    }
  }
  const update = async (id) => {
    try {
      loadingBarRef.current.continuousStart();
      const img = prompt("Enter image link : ");
      const link = prompt("Enter website link : ");
      const updateFields = {};
      if (img) updateFields.img = img;
      if (link) updateFields.link = link;
      if (Object.keys(updateFields).length === 0) {
        toast.error("No updates provided");

        return;
      };
      const url = `https://quatlasserver.vercel.app/api/spslist/updateItems/${id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateFields)
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.msg);

        loadingBarRef.current.complete();
        return;
      }
      loadingBarRef.current.complete();
      toast.success(data.msg)
    } catch (error) {
      loadingBarRef.current.complete();
      toast.error('Internal server error')
    }
  }
  const deleteData = async (id) => {
    loadingBarRef.current.continuousStart();
    try {
      const url = `https://quatlasserver.vercel.app/api/spslist/deleteItems/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.msg);

        loadingBarRef.current.complete();
        return;
      }
      loadingBarRef.current.complete();
      toast.success(data.msg)
    } catch (error) {
      loadingBarRef.current.complete();
      toast.error('Internal server error')
    }
  }
  return (
    <>
      <div style={style}>
        <LoadingBar color="#1e90ff" ref={loadingBarRef} height={5} />
        <Navbar02 />
        <div className="quatlas-table-container">
          <div className="welcome">
            <h2 className="wlc-name">Contact Form Data</h2>
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Usn</th>
                <th>Contact Number</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>

              {con.length === 0 ?

                (<tr><td colSpan={5}>No record available!</td></tr>)
                :
                (con.map((ux) =>
                  <tr>
                    <td>{ux.name}</td>
                    <td>{ux.usn}</td>
                    <td>{ux.ConNumber}</td>
                    <td>{ux.message}</td>
                    <td>{ux.createdAtIST}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
        <div className="quatlas-table-container">
          <div className="welcome">
            <h2 className="wlc-name">Crowdfunding Form Data</h2>
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>

              {sp.length === 0 ?
                <tr><td colSpan={4}>No record available!</td></tr>
                :
                sp.map(ux =>
                  <tr>
                    <td>{ux.name}</td>
                    <td>{ux.email}</td>
                    <td>{ux.mobile}</td>
                    <td>{ux.createdAtIST}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <div className="quatlas-table-container">
          <div className="ux">
            <h2 className="wlc-name">Sponsor</h2>
            {inp ? (<>
              <form action="" className="addimage" style={{ gap: '10px' }} onSubmit={sponsor}>
                <input type="text" className='log' placeholder='Enter image link' value={img} onChange={(e) => setImg(e.target.value)} />
                <input type="text" className='log' placeholder='Enter website link' value={link} onChange={(e) => setLink(e.target.value)} />
                <button className="update">Save</button>
              </form>
            </>) : (<>
              <button className="update" onClick={addInfo}>Add</button>
            </>)}
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Image Link</th>
                <th>Link</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sps.length === 0 ? (
                <>
                  <tr>
                    <td>No data available!</td>
                  </tr>
                </>
              ) : (
                sps.map((ios) =>
                  <>
                    <tr>
                      <td>{ios.img}</td>
                      <td>{ios.link}</td>
                      <td><button className="update" onClick={() => update(ios._id)}>Update</button></td>
                      <td><button className="update" onClick={() => deleteData(ios._id)}>Delete</button></td>
                    </tr>
                  </>
                )
              )}
            </tbody>
          </table>
        </div>
        <Developer />
      </div>
    </>
  )
}

export default Forms
