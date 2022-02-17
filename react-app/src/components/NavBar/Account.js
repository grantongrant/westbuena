import { useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'



function Account () {

    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
        <nav>
            <p>Track Order</p>
            <LogoutButton/>
        </nav>
        );
    } else {
        sessionLinks = (
        <nav className="login-signup">
            <NavLink to="/login"><button id="log-in-button">Log In / Sign Up</button></NavLink>
        </nav>
        );
    }


    return (
        <div>
            <BiUser />
            {sessionLinks}
        </div>
    )
}

export default Account