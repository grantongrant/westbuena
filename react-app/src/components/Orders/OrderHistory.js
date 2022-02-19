import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../store/order';
import { NavLink } from 'react-router-dom';


function OrderHistory({user}) {

    const dispatch = useDispatch();
    const ordersObject = useSelector((state) => state.order)
    const orders = Object.values(ordersObject)
    console.log(orders)

    useEffect(() => {
        dispatch(getAllOrders(user.id))
    }, [dispatch, user.id]);

    const orderComponents = orders.map((order) => {
        return (
          <li key={order.id}>
            <NavLink to={`/products/${order.product.id}`}>{order.product.name}</NavLink>
          </li>
        );
      });

    return (
        <div>
            <div>
                <h1>Order History</h1>
                <div>Search by Order Number</div>
            </div>
            {orderComponents}
        </div>


    )
};

export default OrderHistory;