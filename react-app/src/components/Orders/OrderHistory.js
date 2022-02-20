import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, updateOrder } from '../../store/order';

function OrderHistory({user}) {

    const dispatch = useDispatch();
    const ordersObject = useSelector((state) => state.order)
    const orders = Object.values(ordersObject)
    const [update, setUpdate] = useState(false);
    const [quantity, setQuantity] = useState();
    const [productId, setProductId] = useState();
    const [orderId, setOrderId] = useState();

    useEffect(() => {
        dispatch(getAllOrders(user.id))
    }, [dispatch, user.id]);

    const updateQuantity = () => {
        dispatch(updateOrder(orderId, productId, parseInt(quantity,10)))
    };

    const orderComponents = orders.map((order) => {

        let updateDiv;
        if (update === true) {
            updateDiv =
            <form>
            <input
                type="text"
                placeholder={order.quantity}
                defaultValue={order.quantity}
                onChange={(e) => {
                    setQuantity(e.target.value)
                    setProductId(order.product_id)
                    setOrderId(order.id)
                }}
                name="quantity"
            />
            <button type="button" onClick={updateQuantity}>Update</button>
        </form>
        } else {
            updateDiv =
            <>
            <p>QTY: {order.quantity}</p>
            <p>${order.total}</p>
            </>
        }

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
            <div>Delivered</div>
            </>;
            action = 
            <>
            <button>Return Items</button>
            </>
        } else if(order.returned === true) {
            status =
            <>
            <div>Returned icon</div>
            <div>Returned</div>
            </>;
            action = null;
        } else {
            status =
            <>
            <div>Ordered Icon</div>
            <div>Ordered</div>
            </>;
            action = 
            <>
            <button>Cancel Order</button>
            <button onClick={() => setUpdate(true)}>Update Order</button>
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
                                {updateDiv}
                            </div>
                            <div className="status">{status}</div>
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
            <div className="order-page-header">
                <div><h1>Order History</h1></div>
                <div>Search by Order Number</div>
            </div>
            {orderComponents}
        </div>


    )
};

export default OrderHistory;