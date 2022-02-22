import { useSelector, useStore } from "react-redux";
import { NavLink } from "react-router-dom";

const CheckoutPage = () => {

    const user = useSelector((state) => state.session.user)

    return (
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
    )
};

export default CheckoutPage;