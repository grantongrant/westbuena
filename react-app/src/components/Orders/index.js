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
            <OrderSignin/>
        </div>
    }
    
    return (
        <div>
            <h1>Track Your Order</h1>
            {sessionLinks}
        </div>
    );
};

export default OrdersPage;