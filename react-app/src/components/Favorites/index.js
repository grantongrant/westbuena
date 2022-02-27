import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Products/Products.css';
import './Favorites.css';
import Favorites from './Favorites';
import {FaHeart} from 'react-icons/fa';
import { getAllFavorites } from '../../store/favorite';


const FavoritesPage = () => {

    const user = useSelector(state => state.session.user);
    const favoriteObject = useSelector((state) => state.favorite)
    const favorites = Object.values(favoriteObject)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllFavorites(user?.id))
    }, [dispatch, user?.id])

    let sessionLinks;
    if (user) {
        sessionLinks = <Favorites user={user}/>
    } else {
        sessionLinks = 
        <div className="empty-cart-content">
            <div className="favorite-page-heart"><FaHeart/></div>
            <div className="lots-of-room">Lots of room for the things you love.</div>
            <p>Explore our products and add your favorites anywhere you see a heart.</p>
            <div>
                <NavLink to="/login"><button className="cart-button blue-white-button">Sign In</button></NavLink>
                <NavLink to="/login"><button className="cart-button white-blue-button">Create an Account</button></NavLink>
            </div>
        </div>
    }

    return (
        <>
        <div className="favorites-header">
            <p className="favorites-header-text">Favorites</p>
            <div className="favorite-length">{user ? `(${favorites.length})` : `(0)`}</div>
        </div>
        {sessionLinks}
        </>
    )
}

export default FavoritesPage;