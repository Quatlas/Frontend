import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footbar';

const Alumini = () => {
    const [aluminiData, setAluminiData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const get = async () => {
            setLoad(true);
            try {
                const url = 'https://quatlasserver.vercel.app/api/members/memberData';
                const addedResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                const addedData = await addedResponse.json();

                const aluminiTeam = addedData[0].teams.find(team => team.roleName === "Alumini");
                if (aluminiTeam) {
                    setAluminiData(aluminiTeam.roleData);
                }

            } catch (error) {
                console.error("Error fetching alumini data:", error);
            } finally {
                setLoad(false);
            }
        }
        get();
    }, []);

    return (
        <>
            <header>
                <Navbar />
                <Stars />
                <div className="quatlas-aln">
                    <h1 className="quatlas-aln-hd">Quatlas Alumni</h1>
                </div>
            </header>

            <section>
                <div className="card-container iox">
                    {load ? (
                        <div className="loading">
                            <div className="loading-wide">
                                <div className="l1 color"></div>
                                <div className="l2 color"></div>
                                <div className="e1 color animation-effect-light"></div>
                                <div className="e2 color animation-effect-light-d"></div>
                                <div className="e3 animation-effect-rot">X</div>
                                <div className="e4 color animation-effect-light"></div>
                                <div className="e5 color animation-effect-light-d"></div>
                                <div className="e6 animation-effect-scale">*</div>
                                <div className="e7 color"></div>
                                <div className="e8 color"></div>
                            </div>
                        </div>
                    ) : (
                        aluminiData.map((alumini) => (
                            <div className="quatlas-card" key={alumini._id}>
                                <img
                                    src={alumini.img}
                                    alt={alumini.name}
                                    
                                />
                                <div className="quatlas-card-content">
                                    <h2 className='quatlas-c-hd'>{alumini.name}</h2>
                                    <p className='quatlas-role'>{alumini.role}</p>
                                    {alumini.linkedin && (
                                        <a href={alumini.linkedin} target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-[#1c2237]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                                                style={{ backgroundColor: "#1c2237" }}>
                                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                                                <div className="flex items-center">
                                                    <span className="ml-1 text-white">LinkedIn</span>
                                                </div>
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Alumini;
