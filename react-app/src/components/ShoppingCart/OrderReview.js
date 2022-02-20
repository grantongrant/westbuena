import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoppingcart } from '../../store/shoppingcart';

function OrderReview() {

    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const cartObject = useSelector((state) => state.shoppingcart)
    const items = Object.values(cartObject)

    console.log(items)

    useEffect(() => {
        dispatch(getAllShoppingcart(user.id))
      }, [dispatch, user.id]);

    return (
        <h1>Hi from Checkout</h1>
    )
};

export default OrderReview;

