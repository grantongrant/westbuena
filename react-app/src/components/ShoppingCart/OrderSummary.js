import { useState, useEffect } from "react";
import './Shoppingcart.css';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnOrder } from "../../store/order";

function OrderSummary({items}) {

    const [subtotalItems, setSubtotalItems] = useState();
    const [subtotalPrice, setSubtotalPrice] = useState();
    const [salesTax, setSalesTax] = useState();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        let price_subtotal = 0;
        let item_subtotal = 0;
        items.forEach(item => {
            price_subtotal += (item.price * item.quantity);
            item_subtotal += item.quantity;
        });
        setSubtotalPrice((price_subtotal).toFixed(2));
        setSalesTax((price_subtotal*0.10).toFixed(2));
        setSubtotalItems(item_subtotal);
    }, [items]);

    const checkout = () => {
        const order_number = (Math.floor(Math.random() * 800000)) + 100000
        items.forEach(item => {
            const sales_tax = (item.price * 0.10).toFixed(2);
            dispatch(addAnOrder(
                order_number,
                user.id, 
                item.product.id, 
                item.quantity, 
                item.price,
                sales_tax,
                ))
        });
        history.push('/orders');
    };

    return (
        <form>
            <div>Order Summary</div>
            <div>
                <p>Subtotal {subtotalItems === 1 ? `(${subtotalItems} Item)` : `(${subtotalItems} Items)`}</p>
                <p>${subtotalPrice}</p>
            </div>
            <div>
                <p>Total sales tax</p>
                <p>${salesTax}</p>
            </div>
            <p>By continuing with your purchase you agree to our terms and conditions and privacy policy, which do not exist.</p>
            <button type="button" onClick={checkout}>Checkout</button>
            <p>Our Shopping cart reflects each item's most recent price. Price and availability is subject to change.</p>
        </form>
    )
};

export default OrderSummary;