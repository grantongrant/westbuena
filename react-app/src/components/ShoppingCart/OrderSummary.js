import { useState, useEffect } from "react";
import './Shoppingcart.css';
import { useDispatch, useSelector } from "react-redux";
import { addAnOrder } from "../../store/order";
import { useHistory } from "react-router-dom";
import { clearCart } from "../../store/shoppingcart";

function OrderSummary({items}) {

    const [subtotalItems, setSubtotalItems] = useState();
    const [subtotalPrice, setSubtotalPrice] = useState();
    const [salesTax, setSalesTax] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
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
        for (let i = 0; i < items.length; i++) {
            const price = items[i].price * items[i].quantity
            const sales_tax = (price * 0.10).toFixed(2);
            const total = (parseFloat(price) + parseFloat(sales_tax)).toFixed(2);
            dispatch(addAnOrder(
                order_number,
                user.id,
                items[i].product_id, 
                items[i].quantity,
                price,
                sales_tax,
                total,
                ))
        }
        console.log(items)
        dispatch(clearCart(items))
        history.push("/checkout/thanks")
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