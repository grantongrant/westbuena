import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {

    return (
        <>
        <div className = "splash-content">
            <div className ="splash-slideshow">
                <div className="splash-style-tip">
                    <p>Style tip: Play with size and scale for garden decor perfection</p>
                    <div className="splash-shop-link"><NavLink to="shop/sale">Shop the sale</NavLink></div>
                </div>
            </div>
            {/* <NavLink to="/about"><div className="mental-health-banner">
                <div className="banner-content">
                    <div className="banner-1">Grant-Russell, Inc. celebrates</div>
                    <div className="banner-2">Mental Health Awareness</div>
                </div>
                <div className="banner-3">Learn more</div>
            </div></NavLink> */}
        </div>
        {/* <div className="second-content">
            <div className="second-content-1"></div>
            <div className="second-content-2">
                <img src="https://westbuena.s3.us-east-2.amazonaws.com/splash-secondary.jpg" alt="mature garden"/>
            </div>
        </div> */}
        </>

    )
}

export default SplashPage;