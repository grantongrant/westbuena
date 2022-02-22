import React from 'react';
import { useSelector } from 'react-redux';
import OrderHistory from './OrderHistory';
import './Orders.css';
import OrderSignin from './OrderSignIn';


function OrdersPage() {

    const user = useSelector(state => state.session.user);

    let sessionLinks;
    if (user) {
        sessionLinks = <OrderHistory user={user}/>
    } else {
        sessionLinks = 
        <div className="order-sign-in">
            <p className="order-sign-in-header">Track Your Order</p>
            <OrderSignin/>
        </div>
    }
    
    return (
        <div>
            {sessionLinks}
        </div>
    );
};

export default OrdersPage;