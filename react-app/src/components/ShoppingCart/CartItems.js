import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteCartItem, updateCart } from '../../store/shoppingcart';
import { NavLink } from 'react-router-dom';
import {BiX} from "react-icons/bi";


function CartItems({items}) {

    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();
    const [productId, setProductId] = useState("");
    const [error, SetError] = useState("");
   
    const updateQuantity = () => {
        dispatch(updateCart(user.id, productId, parseInt(quantity,10)))
    };

    const removeItem = (item) => {
        dispatch(deleteCartItem(item));
      };

    const adjustQuantity = (input) => {
        if (!input) {
            return;
        } else if (input < 0) {
            setQuantity(quantity)
        } else if (input > 9) {
            setQuantity(9)
            SetError("We limit to nine (9) product items per order.")
        } else {
            setQuantity(input)
            SetError("")
        }
    }

    const CartList = items.map((item) => {

        return (
            <li className="cart-table" key={item.id}>
            <div className="image-card-with-remove">
                <img src={item.image} alt={item.name}/>
                <button className="remove-button"  type="button" onClick={(e) => {removeItem(item)}}>
                    <div className="remove-button-content x-remove"><BiX/></div>
                    <div className="remove-button-content">Remove</div>
                </button>
            </div>
            <div className="cart-item-body">
                <div className="product-name"><NavLink to={`/products/${item.product_id}`}>{item.product_name}</NavLink></div>
                <div className="cart-quantity-error">{error && productId === item.product_id? error : null}</div>
                <div className="price-and-quantity">
                    <div className="item-price-container">
                        <div className="item-price">Item Price</div>
                        <div className="item-price-amount">${item.price}</div>
                    </div>
                    <div className="item-quantity">
                        <div className="item-price quantity">QUANTITY</div>
                        <div>
                            <form className="quantity-container">
                                <input
                                    type="number"
                                    placeholder={item.quantity}
                                    // value={item.quantity}
                                    defaultValue={item.quantity}
                                    onChange={(e) => {
                                        adjustQuantity(e.target.value)
                                        setProductId(item.product_id)
                                    }}
                                    name="quantity"
                                />
                            </form>
                            <button className="update-quantity" type="button" onClick={updateQuantity}>Update</button>
                        </div>
                    </div>
                    <div className="item-total-price">
                        <div className="item-price">Item Total</div>
                        <div className="item-price-amount">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </li>
        );
      });

    return (
        <>{CartList}</>
    );
}

export default CartItems;