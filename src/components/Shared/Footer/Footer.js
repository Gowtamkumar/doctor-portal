import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

library.add(fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram)
const Footer = () => {

    return (
        <div className="container footer-contaier mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ul class="list-group">
                        <li class="list-group-items">Emergency Dental Care</li>
                        <li class="list-group-items">Check Up</li>
                        <li class="list-group-items">Treatment of Personal Diseases</li>
                        <li class="list-group-items">Tooth Extraction</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Services</h5>
                    <ul class="list-group">
                        <li class="list-group-items">
                            <Link to="/">Emergency Dental Care</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Check Up</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Check Up</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Oral Health</h5>
                    <ul class="list-group">
                        <li class="list-group-items">
                            <Link to="/">Tooth Extraction</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Tooth Extraction</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Treatment of Personal Diseases</Link>
                        </li>
                        <li class="list-group-items">
                            <Link to="/">Emergency Dental Care</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Our Address</h5>
                    <p>Jessore-Ganganandapur-Chutipur Rd, Jashore</p>
                    <div >
                        <FontAwesomeIcon className="info-icon" icon={faFacebookF} style={{ fontSize: '25px', marginLeft: "12px", }} />
                        <FontAwesomeIcon className="info-icon" icon={faLinkedinIn} style={{ fontSize: '25px', marginLeft: "12px" }} />
                        <FontAwesomeIcon className="info-icon" icon={faTwitter} style={{ fontSize: '25px', marginLeft: "12px" }} />
                        <FontAwesomeIcon className="info-icon" icon={faInstagram} style={{ fontSize: '25px', marginLeft: "12px" }} />
                    </div>
                    <div className="mt-3">
                        <h5>Call Now</h5>
                        <button className="btn btn-success">+25784146</button>
                    </div>

                </div>

            </div>
            <div className="row copyright-container">
                <div className="col-md-12 text-center">
                    <h5>Copyright {(new Date()).getFullYear()} all Rights Reserved</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;