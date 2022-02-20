import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./Auth.css";
import { AiOutlineRight } from 'react-icons/ai';

const Authenticate = () => {

    return (
        <div>
            <div><p>Home <AiOutlineRight/> Sign In</p></div>
            <div><h1>My Account</h1></div>
            <div className="authenticate-content">
                <div><LoginForm/></div>
                <div><SignUpForm/></div>
            </div>
        </div>
    )
};

export default Authenticate;