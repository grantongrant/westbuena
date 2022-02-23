import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./Auth.css";
import { AiOutlineRight } from 'react-icons/ai';
import Footer from "../Footer";

const Authenticate = () => {

    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-text-brown">Home</div> 
                <div className="breadcrumb-arrow"><AiOutlineRight/></div>
                <div className="breadcrumbs-text-gray">Sign In</div>
            </div>
            <div className="my-account-header">My Account</div>
            <div className="authenticate-content">
                <div className="login-form-container"><LoginForm/></div>
                <div className="signup-form-container"><SignUpForm/></div>
            </div>
            <Footer />
        </div>
    )
};

export default Authenticate;