import './Footer.css';
import { GoLocation } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer-container">
            <div className="content-container">
                <div className="footer-content">
                    <div className="footer-header">I'm Here To Help</div>
                    <li className="footer-list"><NavLink to="/orders">Track Your Order</NavLink></li>
                    <li className="footer-list"><a href="https://linkedin.com/in/ge-russell" target="_blank" rel="noreferrer">Contact Me</a></li>
                </div>
                <div className="footer-content">
                    <div className="footer-header">Why Grant Russell?</div>
                    <li className="footer-list"><NavLink to="/about">My Values</NavLink></li>
                    <li className="footer-list"><a href="https://linkedin.com/in/ge-russell" target="_blank" rel="noreferrer">Hire Me</a></li>
                </div>
                <div className="footer-content">
                    <div className="footer-header">My Location</div>
                    <div className="footer-list" id="location-link"><a href="https://goo.gl/maps/UmbQRkWBMcpTMVPc6" target="_blank" rel="noreferrer"><GoLocation id="location-icon" />BUENA PARK</a></div>
                    <div className="footer-list">West Buena Avenue</div>
                    <div className="footer-list">Chicago, IL 60613</div>
                    {/* <div className="footer-list" id="phone-link"><a href="tel:312-489-9384">(312) 489-9384</a></div> */}
                </div>
                <div className="social-links">
                    <div><a href="https://github.com/grantongrant" target="_blank" rel="noreferrer"><img id="github-logo" src={"https://westbuena.s3.us-east-2.amazonaws.com/GitHub-Mark-32px.png"} alt="github logo"/></a></div>
                    <div><a href="https://linkedin.com/in/ge-russell/" target="_blank" rel="noreferrer"><img id="linkedin-logo" src={"https://westbuena.s3.us-east-2.amazonaws.com/linked-in.png"} alt="linkedin logo"/></a></div>
                </div>
            </div>
            <div className="copyright-container">
                <div className="copyright-content">
                    <div>© 2022 Grant-Russell Inc., All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;