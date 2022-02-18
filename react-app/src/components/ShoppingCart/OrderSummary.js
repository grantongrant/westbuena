import { useState, useEffect } from "react";
import './Shoppingcart.css';


function OrderSummary({items}) {

    const [subtotalItems, setSubtotalItems] = useState();
    const [subtotalPrice, setSubtotalPrice] = useState();
    
    useEffect(() => {
        let subtotal = 0;
        items.forEach(item => {
            subtotal += item.quantity;
        })
        setSubtotalItems(subtotal);
    }, [items]);

    useEffect(() => {
        let subtotal = 0;
        items.forEach(item => {
            subtotal += (item.price * item.quantity)
        });
        setSubtotalPrice(subtotal.toFixed(2));
    }, [items]);

    return (
        <form>
            <div>Order Summary</div>
            <div>
                <p>Subtotal {subtotalItems === 1 ? <p>({subtotalItems} Item)</p> : <p>({subtotalItems} Items)</p>}</p>
                <p>${subtotalPrice}</p>
            </div>
            <p>By continuing with your purchase you agree to our terms and conditions and privacy policy, which do not exist.</p>
            <button>Checkout</button>
            <p>Our Shopping cart reflects each item's most recent price. Price and availability is subject to change.</p>
        </form>
    )
}

export default OrderSummary;