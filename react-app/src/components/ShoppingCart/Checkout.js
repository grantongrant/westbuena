// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useEffect } from 'react';
// import { getAllOrders } from '../../store/order';
import { useHistory } from "react-router-dom";


const CheckoutPage = () => {

    const user = useSelector((state) => state.session.user)
    // const dispatch = useDispatch();
    const history = useHistory();
    // const ordersObject = useSelector((state) => state.order)
    // const orders = Object.values(ordersObject).reverse();

    // useEffect(() => {
    //     dispatch(getAllOrders(user.id))
    // }, [dispatch, user.id]);

    let session;
    if (user) {
        session = 
        <div className="order-confirmation-container">
            <div className="order-confirmation-header">
                <div>Order Confirmation</div>
            </div>
            <div className="order-confirmation-body">
                <div className="body-text1">Thanks! Your Order's all set!</div>
                <div className="body-text2">We're fast! You have two minutes to update or cancel your order before it's delivered!</div>
                <div className="body-text2">We'll email your order receipt to <strong>{user.email}</strong>.</div>
                <NavLink to="/orders"><button className="cart-button blue-white-button">View Order Details</button></NavLink>
            </div>
        </div>
    // } else if (user && orders[0].delivered === true) {
    //     session = 
    //     <div className="order-confirmation-container">
    //         <div className="order-confirmation-header">
    //             <div>Order Confirmation</div>
    //         </div>
    //         <div className="order-confirmation-body">
    //             <div className="body-text1">This page has expired.</div>
    //             <div className="body-text2">Your order has already been delivered.</div>
    //             <div className="body-text2">We sent an order receipt to <strong>{user.email}</strong>.</div>
    //             <NavLink to="/orders"><button className="cart-button blue-white-button">View Order Details</button></NavLink>
    //         </div>
    //     </div>
    } else {
        history.push("/")
    }

    return (
        <>
        {session}
        {/* <div className="order-confirmation-container">
            <div className="order-confirmation-header">
                <div>Order Confirmation</div>
            </div>
            <div className="order-confirmation-body">
                <div className="body-text1">Thanks! Your Order's all set!</div>
                <div className="body-text2">We're fast! You have two minutes to update or cancel your order before it's delivered!</div>
                <div className="body-text2">We'll email your order receipt to <strong>{user.email}</strong>.</div>
                <NavLink to="/orders"><button className="cart-button blue-white-button">View Order Details</button></NavLink>
            </div>
        </div> */}
         </>
    )
};

export default CheckoutPage;