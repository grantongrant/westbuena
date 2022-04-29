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
        </div>
        </>

    )
}

export default SplashPage;