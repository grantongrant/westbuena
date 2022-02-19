import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../store/order';


function OrderHistory({user}) {

    const dispatch = useDispatch();
    const ordersObject = useSelector((state) => state.order)
    const orders = Object.values(ordersObject)

    useEffect(() => {
        dispatch(getAllOrders(user.id))
    }, [dispatch, user.id]);

    const orderComponents = orders.map((order) => {

        const DatePlaced = () => {
            const array = order.created_at.split(" ");
            const newDate = [];
            newDate.push(array[1]);
            newDate.push(array[2]);
            newDate.push(array[3])
            return newDate.join(" ");
        }

        let status;
        let action;
        if (order.delivered === true) {
            status = 
            <>
            <div>Delivered Icon</div>
            <p>Delivered</p>
            </>;
            action = 
            <>
            <button>Return Items</button>
            </>
        } else if(order.returned === true) {
            status =
            <>
            <div>Returned icon</div>
            <p>Returned</p>
            </>;
            action = null;
        } else {
            status =
            <>
            <div>Ordered Icon</div>
            <p>Ordered</p>
            </>;
            action = 
            <>
            <button>Cancel Order</button>
            <button>Update Order</button>
            </>
        }

        return (
            <div key={order.id} className="order-card">
                <div className="order-number-info">
                    <div>Order Number: {order.order_number}</div>
                    <div>| Order Date: <DatePlaced/></div>
                </div>
                <div className="order-detail-card">
                    <div className="product-info">
                        <div className="product-info-image">
                            <img src={order.product.image} alt="product"/>
                        </div>
                        <div className="product-info-content">
                            <div>{order.product.name}</div>
                            <div>Item #: {order.product.id} </div>
                            <div>
                                <p>QTY: {order.quantity}</p>
                                <p>${order.total}</p>
                            </div>
                            <div>{status}</div>
                        </div>
                    </div>
                    <div className="return-or-cancel">
                        <div>{action}</div>
                    </div>
                </div>
            </div>
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