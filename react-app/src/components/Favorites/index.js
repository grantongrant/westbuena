import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Products/Products.css';
import Favorites from './Favorites';
import {FaHeart} from 'react-icons/fa';


const FavoritesPage = () => {

    const user = useSelector(state => state.session.user);

    let sessionLinks;
    if (user) {
        sessionLinks = <Favorites user={user}/>
    } else {
        sessionLinks = 
        <div className="empty-cart-content">
            <h2>Favorites</h2>
            <div><FaHeart/></div>
            <p>Lots of room for the things you love.</p>
            <p>Explore our products and add your favorites anywhere you see a heart.</p>
            <div>
                <NavLink to="/login"><button className="cart-button blue-white-button">Sign In</button></NavLink>
                <NavLink to="/login"><button className="cart-button white-blue-button">Create an Account</button></NavLink>
            </div>
        </div>
    }

    return (
        <>{sessionLinks}</>
    )
}

export default FavoritesPage;