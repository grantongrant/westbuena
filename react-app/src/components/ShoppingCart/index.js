import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, getAllShoppingcart, updateCart } from '../../store/shoppingcart';
import { NavLink } from 'react-router-dom';
import Shoppingcart from './Shoppingcart';


function ShoppingCartPage() {

    const user = useSelector(state => state.session.user);

    let sessionLinks;
    if (user) {
        sessionLinks = <Shoppingcart user={user}/>
    } else {
        sessionLinks = 
        <div>
            <h2>Shopping Cart</h2>
            <p>Hi! Looks Like Your Cart's Empty...</p>
            <NavLink to="/login"><button id="login-button">Sign In</button></NavLink>
            <p>OR</p>
            <NavLink to="/login"><button id="login-button">Create an Account</button></NavLink>
            <p>OR</p>
            <NavLink to="/"><button id="login-button">Continue Browsing</button></NavLink>
        </div>
    }
    
    return (
        <>
            {sessionLinks}
        </>
    );
};

export default ShoppingCartPage;