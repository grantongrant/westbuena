import { useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'
import { useEffect, useState } from 'react';
import './NavBar.css';


function Account () {

    const sessionUser = useSelector((state) => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
        <nav className="account-content">
            <div className="login-signup-dropdown"><NavLink to="/orders">Track Order</NavLink></div>
            <LogoutButton/>
        </nav>
        );
    } else {
        sessionLinks = (
        <nav className="account-content">
            <div className="login-signup-dropdown"><NavLink to="/login">Log In / Sign Up</NavLink></div>
            <div className="go-to-orders-dropdown"><NavLink to="/orders">Track Order</NavLink></div>
        </nav>
        );
    }


    return (
        <div>
            <div>
                <button className="account-button" type="button" onClick={openMenu}>
                    <div id="account-icon-a"><BiUser /></div>
                    <div id="account-arrow-a"><BsChevronDown/></div>
                </button>
            </div>
            {showMenu && sessionLinks}
            {/* {sessionLinks} */}
        </div>
    )
}

export default Account