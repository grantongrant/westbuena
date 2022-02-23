import { useSelector, useStore } from "react-redux";
import { NavLink } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {

    const user = useSelector((state) => state.session.user)

    return (
        <>
        <div className="order-confirmation-container">
            <div className="order-confirmation-header">
                <div>About Me</div>
            </div>
            <div className="order-confirmation-body">
                <div className="body-text1">Thanks for visiting! I'm still working on this page.</div>
                <div className="body-text2">Expect to learn a little more about me, and a little more about the design and inspiration for this site.</div>
                <NavLink to="/"><button className="cart-button blue-white-button">Explore West Buena</button></NavLink>
            </div>
        </div>
         </>
    )
};

export default AboutMe;