import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Shoppingcart () {

    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
        <nav>
            <p>Track Order</p>
        </nav>
        );
    } else {
        sessionLinks = (
        <nav>
            <p>Hi! Looks Like Your Cart's Empty...</p>
            <NavLink to="/login"><button id="log-in-button">Sign In</button></NavLink>
            <p>to add to your cart</p>
            <p>You'll see the same thing whether you're shopping on your phone, tablet or computer.</p>
        </nav>
        );
    }


    return (
        <div>
            <NavLink to="/shoppingcart"><BsCart /></NavLink>
            {sessionLinks}
        </div>
    )
}

export default Shoppingcart