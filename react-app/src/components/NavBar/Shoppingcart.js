import { useDispatch, useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useEffect } from 'react';
import { getAllShoppingcart } from '../../store/shoppingcart';

function Shoppingcart () {

    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.shoppingcart)
    const items = Object.values(cartObject)

    useEffect(() => {
        dispatch(getAllShoppingcart(sessionUser?.id))
      }, [dispatch, sessionUser?.id]);

    let sessionLinks;

    if (sessionUser) {
        if (!items?.length) {
            sessionLinks = (
                <nav className="cart-content">
                    <div>Hi! Looks Like Your Cart's Empty...</div>
                </nav>
            )
        } else {
            sessionLinks = (
                <nav className="cart-content">
                    <div className="items-in-cart">Exciting! You Have Cart Items</div>
                    <div><NavLink to="/shoppingcart"><button className="link-to-cart">View Cart</button></NavLink></div>
                </nav>
                );
        }
    } else {
        sessionLinks = (
        <nav className="cart-content">
            <div className="cart-menu-content">
                <div className="items-in-cart">Hi! Looks Like Your Cart's Empty...</div>
                <div><NavLink to="/login"><button className="log-in-button">Sign In</button></NavLink></div>
                <p className="items-in-cart">to add to your cart</p>
                <p>You'll see the same thing whether you're shopping on your phone, tablet or computer.</p>
                </div>
        </nav>
        );
    }


    return (
        <div className="cart-menu">
            <NavLink id="cart-icon-a" to="/shoppingcart"><BsCart /></NavLink>
            {sessionLinks}
        </div>
    )
}

export default Shoppingcart