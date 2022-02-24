import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoppingcart } from '../../store/shoppingcart';
import { NavLink } from 'react-router-dom';
import './Shoppingcart.css';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';


function ShoppingCart({user}) {

    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.shoppingcart)
    const items = Object.values(cartObject)

    useEffect(() => {
        dispatch(getAllShoppingcart(user.id))
      }, [dispatch, user.id]);

    let sessionCart;
    if (!items.length) {
        sessionCart = 
        <div className="empty-cart-content">
            <h2>Shopping Cart</h2>
            <p>Welcome Back, {user.full_name}! Looks Like Your Cart's Empty...</p>
            <NavLink to="/"><button className="cart-button white-brown-button">Start Shopping</button></NavLink>
        </div>
    } else {
        sessionCart = 
        <div className="cart-container">
            <div className="left-container-item-detail">
                <h2>Shopping Cart</h2>
                <p className="shipping">Shipping</p>
                <div><CartItems items={items}/></div>
                </div>
            <div className="right-container-order-detail">
                <div><OrderSummary items={items}/></div>
            </div>
        </div>
    }
    
    return (
        <>{sessionCart}</>
    );
};

export default ShoppingCart;