import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, updateOrder, deleteOrder } from '../../store/order';
import { BsFillCheckCircleFill, BsFillCartCheckFill } from "react-icons/bs";

function OrderHistory({user}) {

    const dispatch = useDispatch();
    const ordersObject = useSelector((state) => state.order)
    const orders = Object.values(ordersObject)
    const [update, setUpdate] = useState(false);
    const [quantity, setQuantity] = useState();
    const [orderId, setOrderId] = useState();
    const [isLoaded, setisLoaded] = useState(false);
    const [orderNo, setOrderNo] = useState();
    const [productId, setProductId] = useState();

    useEffect(() => {
        dispatch(getAllOrders(user.id))
    }, [dispatch, user.id, update]);

    useEffect(() => {
        const timer = setTimeout(() => {
          setisLoaded(true)
        }, 500);
        return () => clearTimeout(timer);
      });

    const updateQuantity = async () => {
        await dispatch(updateOrder(orderId, productId, parseInt(quantity,10)))
        .then (() => setUpdate(false))
    };

    const deleteThisOrder = (order) => {
        dispatch(deleteOrder(order.id))
    }

    const isLoading =
        <div className="isLoading"></div>

    const orderComponents = orders.map((order) => {

        let updateDiv;
        if (update === true && order.id === orderNo) {
            updateDiv =
            <form>
            <input
                type="text"
                placeholder={order.quantity}
                defaultValue={order.quantity}
                onChange={(e) => {
                    setQuantity(e.target.value)
                    setOrderId(order.id)
                    setProductId(order.product_id)
                }}
                name="quantity"
            />
            <button className="black-order-buttons" type="button" onClick={updateQuantity}>Update</button>
        </form>
        } else {
            updateDiv =
            <>
            <p>QTY: {order.quantity}</p>
            <p>${order.total}</p>
            </>
        }

        const DatePlaced = () => {
            const array = order?.created_at?.split(" ");
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
            <div><BsFillCheckCircleFill/></div>
            <div>Delivered</div>
            </>;
            action = 
            <>
            <button button className="black-order-buttons" type="button" >Return Items</button>
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
            <div><BsFillCartCheckFill/></div>
            <div>Ordered</div>
            </>;
            action = 
            <>
            <button className="black-order-buttons" type="button" onClick={() => {
                setOrderNo(order.id)
                deleteThisOrder(order)
            }}>Cancel Order</button>
            <button className="black-order-buttons" onClick={() => {
                setUpdate(true)
                setOrderNo(order.id)
            }}>Update Order</button>
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
                            <img src={order.product?.image} alt="product"/>
                        </div>
                        <div className="product-info-content">
                            <div>{order.product?.name}</div>
                            <div>Item #: {order.product?.id} </div>
                            <div>
                                {updateDiv}
                            </div>
                            <div className="status">{status}</div>
                        </div>
                        <div className="return-or-cancel">
                            {action}
                        </div>
                    </div>
                </div>
            </div>
        );
      });

    return (
        <div className="order-page-container">
            <div className="order-page-header">
                <div className="order-page-header-text">Order History</div>
                <div className="order-page-search-box">
                    <div>Search by Order Number</div>
                </div>
            </div>
            {isLoaded ? orderComponents : isLoading}
        </div>


    )
};

export default OrderHistory;