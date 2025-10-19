import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stars from './Stars'
import Footer from './Footbar'
import { Link, useNavigate } from 'react-router-dom';

const Sponsors = () => {
    const [sps, setSps] = useState([]);
    const jux = async () => {
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
                const spData = await spRes.json();
                console.log(spData)
                return;
            }
            const spData = await spRes.json();
            setSps(spData);
        } catch (error) {

        } finally {

        }
    }
    useEffect(() => {
        jux();
    }, [])
    return (
        <>
            <header>
                <Navbar />
                <Stars />
            </header>
            <section>
                <div class="quatlas-st-spn">
                    <h1 class="quatlas-st-03">Sponsors</h1>
                    <div class="quatlas-st-01">
                        <p class="quatlas-st-02">Sponsors are the lifeblood of any successful endeavor, providing vital support and resources that fuel progress and achievement. In the context of Quatlas, our aeromodelling club, sponsors play a pivotal role in turning our engineering dreams into reality. Their financial backing, expertise, and industry connections elevate our projects, enabling us to reach new heights in innovation. Sponsors are not just financial contributors; they are partners in our journey, helping us bridge the gap between theory and practice and inspiring future generations of engineers. Their importance cannot be overstated as they are instrumental in our pursuit of excellence.</p>
                    </div>
                </div>
                <div class="quatlas-st-sp">
                    <h1 class="quatlas-st-03">Connect with Quatlas</h1>
                    <div class="quatlas-st-01">
                        <p class="quatlas-st-04">Connecting with Quatlas as a sponsor is an opportunity to lead the charge in innovation and engineering excellence. Your support powers our ambition to develop cutting-edge aeromodelling projects, advancing the frontier of aviation technology. By partnering with us, you not only uphold our mission but also gain visibility among a broad audience of students, faculty, industry professionals, and media. Working with Quatlas means embarking on a journey that inspires and cultivates future engineers, establishing a lasting impact on aerospace innovation. Partner with us, and together, we'll reach new pinnacles of engineering brilliance.</p>
                    </div>
                </div>
                <div class="quatlas-st-sd">
                    <h1 class="quatlas-st-03">Three Ways To Be A Part Of Quatlas</h1>
                    <div class="quatlas-st-01">
                        <div class="quatlas-m-01">
                            <h2 class="quatlas-m-02">Sponsorship through Parts</h2>
                            <p class="quatlas-m-03">Become an integral part of Quatlas by providing essential components and materials needed for our projects. Your support in the form of high-quality parts ensures that our aircraft are built to the highest standards, enhancing their performance and safety. As a sponsor, your contribution not only helps us innovate and excel in the aviation industry but also demonstrates your commitment to cutting-edge technology and quality. By partnering with us, you gain visibility and recognition in a sector driven by precision and excellence. Your involvement is crucial in enabling us to push the boundaries of what is possible and in maintaining our position as a leader in advanced aeronautics. This partnership offers a unique opportunity to showcase your brand’s dedication to sustainability and innovation, aligning with Quatlas’s mission to redefine aviation. Together, we can achieve groundbreaking advancements, ensuring the future of flight is more efficient, safe, and transformative.</p>
                        </div>
                        <div class="quatlas-m-01">
                            <h2 class="quatlas-m-02">Monetary Sponsorship</h2>
                            <p class="quatlas-m-03">You can contribute to Quatlas's success by offering financial support. Your monetary sponsorship allows us to cover project expenses, travel costs for competitions, and invest in advanced equipment, propelling us toward engineering excellence. With your support, we can attract top talent, accelerate our research and development efforts, and bring innovative ideas to life. Financial contributions from sponsors like you are vital in ensuring that we have the resources to tackle ambitious projects and set new standards in the aviation industry. Your investment not only empowers us to overcome challenges but also aligns your brand with the forefront of technological progress and excellence. By supporting Quatlas financially, you become a key player in our journey to transform the future of flight, driving breakthroughs that benefit the industry and society at large. Join us in our mission to achieve unprecedented levels of performance, safety, and sustainability in aviation.</p>
                        </div>
                        <div class="quatlas-m-01">
                            <h2 class="quatlas-m-02">Service-Based Sponsorship</h2>
                            <p class="quatlas-m-03">Partner with Quatlas by providing specialized services or expertise, which may include engineering consultation, technical training, logistical support, and even travel coverage. Your services and travel assistance contribute significantly to our success, allowing us to streamline operations, optimize designs, and participate in competitions with confidence. Through your support, we can enhance our technical capabilities and leverage industry-leading practices, ultimately leading to superior aircraft development and performance. Your contributions help us navigate complex engineering challenges and improve our team's skills, ensuring we stay at the cutting edge of aviation technology. By offering your services, you not only become an essential part of our journey but also gain a unique opportunity to showcase your expertise and commitment to innovation. Together, we can achieve greater efficiency, foster collaboration, and drive forward the next generation of aerospace solutions, setting new benchmarks for the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="quatlas-our-spn">
                    <h1 className="quatlas-our-spn-01">Our Sponsors</h1>
                    <div className="quatlas-sponsor-container">
                        {sps.map((ion) =>
                            (<>
                                <div className="quatlas-sponsor-card">
                                    <img src={ion.img} alt="Refresh to reload the image" className='quatlas-mg-02' />
                                    <a
                                        style={{ "--clr": "#282936" }}
                                        className="button"
                                        href={ion.link}
                                    >
                                        <span className="button__icon-wrapper">
                                            <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                            </svg>
                                            <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                            </svg>
                                        </span>
                                        Learn More
                                    </a>
                                </div>
                            </>)
                        )}
                    </div>
                </div>
                <div class="quatlas-cf">
                    <div class="quatlas-cw-01">
                        <p class="quatlas-cw-02">Join Quatlas in revolutionizing aviation through our crowdfunding campaign. Your support fuels innovation that enhances safety, efficiency, and sustainability in air travel. Together, we're pioneering smarter aircraft and airspace solutions. Join us today to shape the future of flight.Together, let's propel Quatlas towards redefining the skies and setting new standards in aerospace excellence.</p>
                        <div class="quatlas-fix">
                            <Link style={{ '--clr': '#282936' }} class="button" to="/crowdfunding">
                                <span class="button__icon-wrapper">
                                    <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                    </svg>

                                    <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                    </svg>
                                </span>
                                CROWDFUNDING
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default Sponsors
