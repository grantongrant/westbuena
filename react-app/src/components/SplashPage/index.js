import React from 'react';
import { NavLink } from 'react-router-dom';

import './SplashPage.css';

const SplashPage = () => {

    return (
        <div className = "splash-content">
            <div className ="splash-slideshow">
                <div className="splash-style-tip">
                    <p>Style tip: Play with size and scale for garden decor perfection</p>
                    <div className="splash-shop-link"><NavLink to="shop/garden-decor">Shop all decor</NavLink></div>
                </div>
            </div>
            <div className="mental-health-banner">
                <div className="banner-content">
                    <div className="banner-1">Grant-Russell, Inc. celebrates</div>
                    <div className="banner-2">Mental Health Awareness</div>
                </div>
                <div className="banner-3">Learn more</div>
            </div>
        </div>
    )
}

export default SplashPage;