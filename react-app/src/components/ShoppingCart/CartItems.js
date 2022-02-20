import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteCartItem, updateCart } from '../../store/shoppingcart';


function CartItems({items}) {

    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();
    const [productId, setProductId] = useState("");
   
    const updateQuantity = () => {
        dispatch(updateCart(user.id, productId, parseInt(quantity,10)))
    };

    const removeItem = (item) => {
        dispatch(deleteCartItem(item));
      };

    const CartList = items.map((item) => {
        return (
            <li className="cart-table" key={item.id}>
            <div className="image-card-with-remove">
                <img src={item.image} alt={item.name}/>
                <button type="button" onClick={(e) => {removeItem(item)}}>Remove</button>
            </div>
            <div className="cart-item-body">
                <div>{item.product_name}</div>
                <div className="price-and-quantity">
                    <div className="item-price">
                        <p>Item Price</p>
                        <p>${item.price}</p>
                    </div>
                    <div className="item-quantity">
                        <p>QUANTITY</p>
                        <div className="quantity-container">
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
                        </div>
                    </div>
                    <div className="item-total-price">
                        <p>Item Total</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
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