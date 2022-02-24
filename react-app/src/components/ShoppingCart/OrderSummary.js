import { useState, useEffect } from "react";
import './Shoppingcart.css';
import { useDispatch, useSelector } from "react-redux";
import { addAnOrder } from "../../store/order";
import { useHistory } from "react-router-dom";
import { clearCart, getAllShoppingcart } from "../../store/shoppingcart";

function OrderSummary({items}) {

    const [subtotalItems, setSubtotalItems] = useState();
    const [subtotalPrice, setSubtotalPrice] = useState();
    const [salesTax, setSalesTax] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user)
    // const [orderNo, setOrderNo] = useState();

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

    const checkout = async () => {
        const order_number = (Math.floor(Math.random() * 800000)) + 100000
        // setOrderNo(order_number)
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
        await dispatch(clearCart(items))
        await dispatch(getAllShoppingcart(user.id))
        history.push("/checkout/thanks")
    };

    return (
        <form>
            <div className="order-summary">Order Summary</div>
            <div className="order-subtotal">
                <div className="subtotal-ternary">Subtotal {subtotalItems === 1 ? <div className="subtotal-item-count">{`(${subtotalItems} Item)`}</div> : <div className="subtotal-item-count">{`(${subtotalItems} Items)`}</div>}</div>
                <div className="subtotal-price">${subtotalPrice}</div>
            </div>
            <div className="sales-tax-container">
                <div>Total sales tax</div>
                <div>${salesTax}</div>
            </div>
            <div className="free-shipping-container">
                <div className="free-shipping">Free shipping</div>
            </div>
            <div className="legal-text">By continuing with your purchase you agree to our terms and conditions and privacy policy, which do not exist.</div>
            <button className="checkout-button" type="button" onClick={checkout}>Checkout</button>
            <div className="legal-text">Our Shopping cart reflects each item's most recent price. Price and availability is subject to change.</div>
        </form>
    )
};

export default OrderSummary;