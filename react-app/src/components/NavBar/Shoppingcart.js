import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './NavBar.css';

function Shoppingcart () {

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
        <nav className="cart-content">
            <p>Track Order</p>
        </nav>
        );
    } else {
        sessionLinks = (
        <nav className="cart-content">
            <div>
                <p>Hi! Looks Like Your Cart's Empty...</p>
                <NavLink to="/login"><button id="log-in-button">Sign In</button></NavLink>
                <p>to add to your cart</p>
                <p>You'll see the same thing whether you're shopping on your phone, tablet or computer.</p>
                </div>
        </nav>
        );
    }


    return (
        <div className="cart-menu">
            <NavLink to="/shoppingcart"><BsCart /></NavLink>
            {sessionLinks}
        </div>
    )
}

export default Shoppingcart