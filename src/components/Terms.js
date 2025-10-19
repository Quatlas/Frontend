import React from 'react'
import Navbar from './Navbar'
import Stars from './Stars'
import Footer from './Footbar'

const Terms = () => {
    return (
        <>
            <header>
                <Navbar />
                <Stars />
                <div className="quatlas-py">
                    <h1 className="quatlas-py-hd">Terms of Use</h1>
                </div>
            </header>
            <section>
                <div className="quatlas-py-ct">
                    <h2 className="quatlas-py-ct-hd">Introduction</h2>
                    <p className="quatlas-py-ct-info">Welcome to Quatlas! These Terms of Use govern your access to and use of our website. By using our site, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our website.</p>
                </div>
                <div className="quatlas-py-ct-00">
                    <h2 className="quatlas-py-ct-hd">Acceptance of Terms</h2>
                    <p className="quatlas-py-ct-info">By accessing and using Quatlas, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you should discontinue using our site.</p>
                </div>
                <div className="quatlas-py-ct-00">
                    <h2 className="quatlas-py-ct-hd">Changes to Terms</h2>
                    <p className="quatlas-py-ct-info">We may modify these Terms of Use at any time. We will notify you of any significant changes by posting the new terms on our website. Your continued use of Quatlas after such changes have been made constitutes your acceptance of the new terms.</p>
                </div>
                <div className="quatlas-py-ct-00">
                    <h2 className="quatlas-py-ct-hd">Eligibility</h2>
                    <p className="quatlas-py-ct-info">To use our website, you must be at least 18 years old or have the permission of a parent or guardian. By using Quatlas, you represent and warrant that you meet these eligibility requirements.</p>
                </div>
                <div className="quatlas-py-ct-01">
                    <h2 className="quatlas-py-ct-hd">User Responsibilities</h2>
                    <h2 className="quatlas-py-ct-hd-01">Compliance with Laws</h2>
                    <ul className="quatlas-ex">
                        <li><strong>Legal Use: </strong> You agree to use Quatlas only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the site by any third party.</li>
                    </ul>
                </div>
                <div className="quatlas-py-ct-01">
                    <h2 className="quatlas-py-ct-hd">Acceptable Use Policy</h2>
                    <h2 className="quatlas-py-ct-hd-01">Prohibited Activities</h2>
                    <p className="quatlas-py-ct-info-01">You agree not to engage in any of the following prohibited activities:</p>
                    <ul className="quatlas-ex">
                        <li><strong>Violating Laws and Regulations: </strong> ou must not use the website in any way that violates applicable local, state, national, or international laws and regulations.</li>
                        <li><strong>Harmful Activities: </strong> You must not upload, post, email, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable.</li>
                        <li><strong>Spamming and Phishing: </strong> You must not use the website to send unsolicited or unauthorized advertising, promotional materials, or any form of spam.</li>
                        <li><strong>Interference with the Site: </strong> You must not interfere with or disrupt the website or servers or networks connected to the website, or disobey any requirements, procedures, policies, or regulations of networks connected to the website.</li>
                    </ul>
                </div>
                <div className="quatlas-py-ct-01">
                    <h2 className="quatlas-py-ct-hd">Intellectual Property</h2>
                    <h2 className="quatlas-py-ct-hd-01">Ownership</h2>
                    <p className="quatlas-py-ct-info-01"><strong>Website Content: </strong>  All content on Quatlas, including text, graphics, logos, images, and software, is the property of Quatlas or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                </div>
                <div className="quatlas-py-ct-00">
                    <h2 className="quatlas-py-ct-hd">Entire Agreement</h2>
                    <p className="quatlas-py-ct-info">These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you and Quatlas regarding your use of our website, and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and Quatlas.</p>
                </div>
                <div className="quatlas-py-ct-00">
                    <h2 className="quatlas-py-ct-hd">Contact Us</h2>
                    <p className="quatlas-py-ct-info">If you have any questions or concerns about these Terms of Use, please contact us at:</p>
                    <p className="quatlas-py-ct-info"><strong>Email: </strong>@quatlasaeromodelling.com</p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Terms
