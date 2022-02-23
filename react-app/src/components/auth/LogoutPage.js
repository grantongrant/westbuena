import { NavLink } from "react-router-dom";
import './Auth.css';

const LogoutPage = () => {

    return (
        <>
        <div className="logout-message-container">
            <div className="logout-confirmation-header">
                <div>Please Come Again</div>
            </div>
            <div className="logout-confirmation-body">
                <div className="logout-text1">You have signed out of your account. We look forward to your next visit.</div>
            </div>
            <div className="logout-todo-buttons">
                <NavLink to="/login"><button id="logout-btn1" className="cart-button blue-white-button">Sign In</button></NavLink>
                <NavLink to="/"><button id="logout-btn2" className="cart-button white-brown-button">Continue Browsing</button></NavLink>
            </div>
        </div>
         </>
    )
};

export default LogoutPage;