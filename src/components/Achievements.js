import React, { useState } from 'react'
import Navbar from './Navbar'
import Stars from './Stars'
import Footer from './Footbar';

const Achievements = () => {
    const [currentSlide2022, setCurrentSlide2022] = useState(0);
    const [currentSlide2019, setCurrentSlide2019] = useState(0);
    const [currentSlide2018, setCurrentSlide2018] = useState(0);
    const [currentSlide2017, setCurrentSlide2017] = useState(0);
    const [currentSlide2016, setCurrentSlide2016] = useState(0);
    const [currentSlide2015, setCurrentSlide2015] = useState(0);

    const moveSlides = (direction, slider) => {
        switch (slider) {
            case 'slider2022':
                setCurrentSlide2022((prevSlide) => (prevSlide + direction + 6) % 6); // Adjust the modulus to the number of images in the slider
                break;
            case 'slider2019':
                setCurrentSlide2019((prevSlide) => (prevSlide + direction + 3) % 3);
                break;
            case 'slider2018':
                setCurrentSlide2018((prevSlide) => (prevSlide + direction + 12) % 12);
                break;
            case 'slider2017':
                setCurrentSlide2017((prevSlide) => (prevSlide + direction + 11) % 11);
                break;
            case 'slider2016':
                setCurrentSlide2016((prev) => (prev + direction + 8) % 8);
                break;
            case 'slider2015':
                setCurrentSlide2015((prevSlide) => (prevSlide + direction + 10) % 10);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <header>
                <Navbar />
                <Stars />
                <div class="quatlas-hd">
                    <h1 class="quatlas-hd-01">Iconic Achievements</h1>
                    <span class="quatlas-req">
                        <img src="/images/quatlas-05.webp" alt="" class="quatlas-g" />
                    </span>
                </div>
            </header>
            <section>
                {/* Year 2022 */}
                <div className="quatlas-2022">
                    <div className="quatlas-add-0">
                        <h1 className="quatlas-2023-hd">Pradarshana</h1>
                        <ul className="quatlas-ac-2023">
                            <li>GLIMPSE OF PRADARSHANA</li>
                        </ul>
                    </div>
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2022 === i ? 'block' : 'none' }}>
                                    <img src={`/images/Copy of DSC_578${5 + i}.JPG`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2022')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2022')}>&#10095;</button>
                    </div>
                </div>

                {/* Year 2019 */}
                <div className="quatlas-2019">
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2019 === i ? 'block' : 'none' }}>
                                    <img src={`/images/Picture${i + 1}2k19.webp`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2019')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2019')}>&#10095;</button>
                    </div>
                    <div className="quatlas-2019-01">
                        <h1 className="quatlas-2019-02">Year 2019</h1>
                        <ul className="quatlas-2019-03">
                            <li>5th overall standing</li>
                            <li>7th place in technical design report</li>
                            <li>15th place in technical presentation</li>
                        </ul>
                    </div>
                </div>

                {/* Year 2018 */}
                <div className="quatlas-2022-00">
                    <div className="quatlas-add-01-00">
                        <h1 className="quatlas-2023-hd-00">Year 2018</h1>
                        <ul className="quatlas-ac-2023-00">
                            <li>Ranked 7th in the flight rounds, with the first ever successful flight round in the history of the team.</li>
                            <li>Total payload lifted - 7.25kgs / 16lbs, highest in Asia for the third round.</li>
                            <li>Ranked 10th in the Oral Presentation.</li>
                            <li>Bonus points in presentation for innovative fuselage design.</li>
                        </ul>
                    </div>
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2018 === i ? 'block' : 'none' }}>
                                    <img src={`/images/Picture${i + 1}2k18.webp`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2018')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2018')}>&#10095;</button>
                    </div>
                </div>

                {/* Year 2017 */}
                <div className="quatlas-2019-000">
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(11)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2017 === i ? 'block' : 'none' }}>
                                    <img src={`/images/gg0${i + 1}.webp`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2017')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2017')}>&#10095;</button>
                    </div>
                    <div className="quatlas-2019-01">
                        <h1 className="quatlas-2019-02">Year 2017</h1>
                        <ul className="quatlas-2019-030">
                            <li>Name of the aircraft - Qriosity, Ranked 12th in the competition.</li>
                            <li>Achieved 2nd position in Asia. Implemented an elliptical wing for better performance.</li>
                            <li>8th worldwide in the presentation rounds.</li>
                            <li>1st in Asia in the presentation rounds.</li>
                        </ul>
                    </div>
                </div>

                {/* Year 2016 */}
                <div className="quatlas-2019-000">
                    <div className="quatlas-2019-01">
                        <h1 className="quatlas-2019-02">Year 2016</h1>
                        <ul className="quatlas-2019-030">
                            <li>5th place globally in payload lifting</li>
                            <li>Carried a payload of 12.5Kg, a record for the team</li>
                            <li>Achieved notable design improvements in wing structure</li>
                            <li>Advanced to the finals, showcasing innovation and efficiency</li>
                        </ul>
                    </div>
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2016 === i ? 'block' : 'none' }}>
                                    <img src={`/images/Picture31.webp`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2016')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2016')}>&#10095;</button>
                    </div>
                </div>

                {/* Year 2015 */}
                <div className="quatlas-2019-000">
                    <div className="slider-container">
                        <div className="slider">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="slide" style={{ display: currentSlide2015 === i ? 'block' : 'none' }}>
                                    <img src={`/images/${i + 1}.webp`} alt={`Image ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={() => moveSlides(-1, 'slider2015')}>&#10094;</button>
                        <button className="next" onClick={() => moveSlides(1, 'slider2015')}>&#10095;</button>
                    </div>
                    <div className="quatlas-2019-01">
                        <h1 className="quatlas-2019-02">Year 2015</h1>
                        <ul className="quatlas-2019-030">
                            <li>The first year of the team</li>
                            <li>15th place worldwide overall</li>
                            <li>11th place in the maximum payload capacity by lifting 13.6Kg</li>
                            <li>Highest payload carried by an Indian team in the competition's history</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Achievements
