import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoppingcart } from '../../store/shoppingcart';
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
    
    return (
        <div>
            <div className="left-container-item-detail">
                <p>Shopping Cart</p>
                <p>Shipping</p>
                <div><CartItems items={items}/></div>
                </div>
            <div className="right-container-order-detail">
                <div><OrderSummary items={items}/></div>
            </div>
        </div>
    );
};

export default ShoppingCart;