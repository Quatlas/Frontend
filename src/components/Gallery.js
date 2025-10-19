import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

import Footer from './Footbar'

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const get = async () => {
            setLoad(true);
            try {
                const url = 'https://quatlasserver.vercel.app/api/gallery/images';
                const addedResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                const addedData = await addedResponse.json();
                setGallery([...addedData].reverse());
            } catch (error) {

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
                <div class="quatlas-aln">
                    <h1 class="quatlas-aln-hd">Gallery</h1>
                </div>
            </header>
            <section>
                <div className="image-container">
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

                        gallery.map((images) =>
                            <>
                                <img src={images.img} className='ijux' />
                            </>
                        )
                    )
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Gallery
