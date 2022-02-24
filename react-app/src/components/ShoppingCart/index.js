import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Shoppingcart from './Shoppingcart';
import './Shoppingcart.css';

function ShoppingCartPage() {

    const user = useSelector(state => state.session.user);

    let sessionLinks;
    if (user) {
        sessionLinks = <Shoppingcart user={user}/>
    } else {
        sessionLinks = 
        <div className="empty-cart-content">
            <h2>Shopping Cart</h2>
            <p>Hi! Looks Like Your Cart's Empty...</p>
            <div>
                <NavLink to="/login"><button className="cart-button blue-white-button">Sign In</button></NavLink>
                <NavLink to="/login"><button className="cart-button white-blue-button">Create an Account</button></NavLink>
            </div>
            <p id="or">OR</p>
            <NavLink to="/"><button className="cart-button white-brown-button">Continue Browsing</button></NavLink>
        </div>
    }
    
    return (
        <>
            {sessionLinks}
        </>
    );
};

export default ShoppingCartPage;