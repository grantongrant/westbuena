import { useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'
import { useEffect, useState } from 'react';


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
            <p>Track Order</p>
            <LogoutButton/>
        </nav>
        );
    } else {
        sessionLinks = (
        <nav className="account-content">
            <NavLink to="/login"><button id="log-in-button">Log In / Sign Up</button></NavLink>
            <p>Track Order</p>
        </nav>
        );
    }


    return (
        <div>
            <div>
                <button type="button" onClick={openMenu}><BiUser /><BsChevronDown/></button>
            </div>
            {showMenu && sessionLinks}
            {/* {sessionLinks} */}
        </div>
    )
}

export default Account