import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

library.add(fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram)
const Footer = () => {

    return (
        <> 
        <div className="container footer_contaier">
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <h4>About Us</h4>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer_link">
                    
                    <h5>Services</h5>
                    <ul class="">
                        <li>
                            <Link to="/">Emergency Dental Care</Link>
                        </li>
                        <li>
                            <Link to="/">Check Up</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li>
                            <Link to="/">Check Up</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="footer_link">
                
                    <h5>Oral Health</h5>
                    <ul >
                        <li>
                            <Link to="/">Tooth Extraction</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li>
                            <Link to="/">Tooth Extraction</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li>
                            <Link to="/">Emergency Dental Care</Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-3">
                    <h5>Our Address</h5>
                    <p>Jessore-Ganganandapur-Chutipur Rd, Jashore</p>
                    <div >
                        <FontAwesomeIcon className="info-icon" icon={faFacebookF} style={{ fontSize: '15px' }} />
                        <FontAwesomeIcon className="info-icon" icon={faLinkedinIn} style={{ fontSize: '15px', marginLeft: "12px" }} />
                        <FontAwesomeIcon className="info-icon" icon={faTwitter} style={{ fontSize: '15px', marginLeft: "12px" }} />
                        <FontAwesomeIcon className="info-icon" icon={faInstagram} style={{ fontSize: '15px', marginLeft: "12px" }} />
                    </div>
                    <div className="mt-3">
                        <h5>Call Now</h5>
                        <button className="btn btn-primary btn-sm">+25784146</button>
                    </div>
                </div>
            </div>
        </div>
         <div className="row">
            <div className="col-md-12 text-center border-top mt-3">
                <h6>Copyright {(new Date()).getFullYear()} all Rights Reserved Developed by Gowtam kumar</h6>
            </div>
        </div>
    </>
    );
};

export default Footer;