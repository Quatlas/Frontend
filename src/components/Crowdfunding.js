import React,{useState} from 'react'
import Navbar from './Navbar'
import Stars from './Stars'
import Footer from './Footbar'

const Crowdfunding = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const spdata = async(e) => {
        e.preventDefault();
        try {
            const url = process.env.REACT_APP_ENDPOINT14;
            const resData = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    "name":name,
                    "email":email,
                    "mobile":mobile
                })
            });
            const data = await resData.json();
            alert(data.msg)
            setName('');
            setEmail('');
            setMobile('');
        } catch (error) {
            alert(error)
        }
    }
  return (
    <>
    <header>
        <Navbar/>
        <Stars/>
    </header>
    <section id="cd">
        <div class="quatlas-main">
            <div class="quatlas-cd-info">
                <h2 class="quatlas-cd-info-hd">Crowdfunding Information for Quatlas</h2>
                <h2 class="quatlas-cd-info-hd-01">Introduction to Crowdfunding:</h2>
                <p class="quatlas-cd-info-p">Quatlas is exploring crowdfunding opportunities to support the development and expansion of our aerospace modeling platform. Crowdfunding allows us to engage with our community and gather the financial support needed to bring innovative features and services to life.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">What is Crowdfunding?</h2>
                <p class="quatlas-cd-info-p">Crowdfunding is a method of raising capital through the collective effort of a large number of individual investors or supporters. This approach leverages the power of the internet and social media to reach a wide audience, allowing Quatlas to secure funding for specific projects and initiatives.
                </p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">How Does Crowdfunding Benefit Quatlas?</h2>
                <p class="quatlas-cd-info-p">By participating in crowdfunding, Quatlas can accelerate its growth, enhance its product offerings, and maintain its commitment to delivering high-quality aerospace modeling solutions. Your support helps us innovate and stay at the forefront of the industry.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">Supporting Quatlas Through Crowdfunding:</h2>
                <p class="quatlas-cd-info-p">When you contribute to Quatlas through crowdfunding, you become part of a community that is passionate about aerospace technology and modeling. Your contribution not only funds our projects but also gives you a voice in the development of new features and services.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">Transparency and Accountability:</h2>
                <p class="quatlas-cd-info-p">Quatlas is committed to transparency in our crowdfunding efforts. We will provide regular updates on the progress of our projects and ensure that funds are used responsibly to achieve the promised outcomes. Your trust and support are invaluable to us.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">How to Participate:</h2>
                <p class="quatlas-cd-info-p">To support Quatlas through crowdfunding, visit our campaign page [insert link here]. You can choose from various contribution levels and rewards, each designed to recognize and thank you for your support.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">Impact of Your Contribution:</h2>
                <p class="quatlas-cd-info-p">Every contribution to our crowdfunding campaign helps Quatlas take a step closer to achieving our mission of providing state-of-the-art aerospace modeling tools. Your support fuels our passion and drives us to create groundbreaking advancements in the industry.</p>
            </div>
            <div class="quatlas-cd-info-01">
                <h2 class="quatlas-cd-info-hd-01">Future Crowdfunding Plans:</h2>
                <p class="quatlas-cd-info-p">Quatlas plans to launch multiple crowdfunding campaigns to support different phases of our development. Stay tuned for updates and opportunities to be part of our journey as we continue to push the boundaries of aerospace modeling.</p>
            </div>
        </div>
        <div class="quatlas-miste">
            <h2 class="quatlas-cd-info-hd" id="upi">Pay Using Upi</h2>
        </div>
        <div class="quatlas-fr">
            <div class="quatlas-qr">
                <img src="/images/gpay_qr_code.webp" alt="" class="quatlas-qr-01"/>
            </div>
            <div class="quatlas-form">
                <form action="" id="sheet-form" onSubmit={spdata}>
                    <div class="inputBox">
                        <input type="text" name="Name" required=""  value={name} id="user" onChange={(e) =>setName(e.target.value) }/>
                        <label for="user">Name</label>
                     </div>
                     <div class="inputBox">
                        <input type="email" name="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)} id="user"/>
                        <label for="user">Email</label>
                     </div>
                     <div class="inputBox">
                        <input type="tel" name="Mobile" required=""  value={mobile} onChange={(e) => setMobile(e.target.value)} id="user"/>
                        <label for="user">Mobile</label>
                     </div>
                    <button class="quatlas-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Crowdfunding
