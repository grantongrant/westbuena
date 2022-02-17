import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, getAllShoppingcart, updateCart } from '../../store/shoppingcart';
import { NavLink } from 'react-router-dom';


function ShoppingCart({user}) {

    // const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.shoppingcart)
    const items = Object.values(cartObject)
    const [quantity, setQuantity] = useState();
    const [productId, setProductId] = useState("");

    useEffect(() => {
        dispatch(getAllShoppingcart(user.id))
      }, [dispatch, user.id]);

    const updateQuantity = () => {
        dispatch(updateCart(user.id, productId, parseInt(quantity,10)))
    };

    const removeItem = (item) => {
        dispatch(deleteCartItem(item));
      };

    const cartComponents = items.map((item) => {
        return (
            <li key={item.id}>
                <NavLink to={`/products/${item.product_id}`}>{item.product_name}</NavLink>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <form>
                    <input
                        type="text"
                        placeholder={item.quantity}
                        defaultValue={item.quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value)
                            setProductId(item.product_id)
                        }}
                        name="quantity"
                        />
                    <button type="button" onClick={updateQuantity}>Update</button>
                </form>
                <button type="button" onClick={(e) => {
                    removeItem(item)
                }}>Remove</button>
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