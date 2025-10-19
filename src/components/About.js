import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footbar';

const About = () => {
  const [teamHead, setTeamHead] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        setLoad(true)
        const url = 'https://quatlasserver.vercel.app/api/members/memberData';
        const addedResponse = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        });
        const addedData = await addedResponse.json();
        setTeamHead(addedData[0].teams)
      } catch (error) {

      }
      finally {
        setLoad(false)
      }
    }
    get()
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div class="quatlas-ab">
          <h1 class="quatlas-hg">About Us</h1>
        </div>
        <div class="quatlas-info">
          <div class="quatlas-info-01">
            <p class="quatlas-p-01">Allow me to introduce Quatlas, the official aeromodelling team of MSRIT (M S Ramaiah
              Institute of Technology), a source of immense pride and a testament to innovative spirit. We as a club that
              knows no boundaries, reaching across geographical limits to showcase our engineering creativity on the global
              competition stage. Within our institution, we stand alone as a group dedicated to aeronautical pursuits,
              designing aircraft that elegantly navigate the skies.</p>
            <p class="quatlas-p-02">We compete in the prestigious SAE Aero Design Competition, a proving ground for our
              expertise in Aerodynamics. We're not just participants; we're torchbearers, representing the spirit of our
              college and the nation as a whole.</p>
            <p class="quatlas-p-03">Quatlas, hailing from the esteemed M S Ramaiah Institute of Technology, stands as a
              beacon of innovation and accomplishment in the realm of aeromodelling. Rooted within the academic tapestry of
              the institution, Quatlas represents a dynamic collective of passionate individuals dedicated to pushing the
              boundaries of engineering and aviation.</p>
            <p class="quatlas-p-04">Throughout its journey, Quatlas has carved a distinguished path, adorned with notable
              achievements that showcase their exceptional prowess. With a commitment to engineering excellence, the team
              has consistently demonstrated their mettle on the global stage of aeromodelling competitions. Their creations,
              crafted with precision and ingenuity, have taken flight to embody the very essence of innovation, often
              capturing top honors and accolades.</p>
          </div>
        </div>
        <div class="our-team">
          <img src="/images/groupPhoto.JPG" alt="" class="team" />
        </div>
      </section>
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
        teamHead.filter((team) => team.roleName.toLowerCase() !== 'alumini')
          .map((team) => (
            <div class="team-wrapper" key={team.roleName}>
              <h2 class="section-heading">{team.roleName}-Team</h2>
              <div class="cards-container">
                {team.roleData.map((member) => (
                  <div class="team-card" key={member.name}>
                    <img src={member.img} alt={member.name} class="profile-img" />
                    <div class="info">
                      <h3 class="name">{member.name}</h3>
                      <p class="role">{member.role}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        class="linkedin"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
      <Footer />
    </>
  )
}

export default About
