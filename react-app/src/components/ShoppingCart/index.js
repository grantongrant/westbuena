import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoppingcart } from '../../store/shoppingcart';
import { NavLink } from 'react-router-dom';


function ShoppingCart() {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.shoppingcart)
    const items = Object.values(cartObject)
    console.log(items)

    useEffect(() => {
        dispatch(getAllShoppingcart(user.id))
      }, [dispatch, user.id]);

    const cartComponents = items.map((item) => {
        return (
            <li key={item.product_id}>
                <NavLink to={`/products/${item.product_id}`}>{item.product_name}:{item.quantity}</NavLink>
            </li>
        );
      });
    
    return (
        <>
            <h1>Shopping Cart: </h1>
            {cartComponents}
        </>
    );
};

export default ShoppingCart;