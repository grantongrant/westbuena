const GET_ORDERS = 'order/GET_ORDERS';
const ADD_ORDER = 'order/ADD_ORDER';
const UPDATE_ORDER = 'order/UPDATE_ORDER';
const DELETE_ORDER = 'order/DELETE_ORDER';

// CREATE -----------------------------------

const addOrder = (order) => ({
    type: ADD_ORDER,
    order,
})
// READ -------------------------------------

const getOrders = (orders) => ({
    type: GET_ORDERS,
    orders,
  });

// UPDATE -----------------------------------

const updateAnOrder = (order) => ({
    type: UPDATE_ORDER,
    order
})

// DELETE -----------------------------------

const deleteAnOrder = (orderId) => ({
    type: DELETE_ORDER,
    orderId
})

// CREATE -----------------------------------

export const addAnOrder = (order_number, user_id, product_id, quantity, price, sales_tax, total) => async (dispatch) => {
    try {
        const response = await fetch('/api/orders/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                order_number,
                user_id,
                product_id,
                quantity,
                price,
                sales_tax,
                total,
            }),
        });

        if (!response.ok) throw new Error ("Failed to add order");

        const order = await response.json();
        dispatch(addOrder(order));
        return order;
    } catch (error) {
        console.error("Error adding order:", error);
    }
};

// READ -------------------------------------

export const getAllOrders = (userId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders/${userId}`);

        if (!response.ok) throw new Error ("Failed to fetch orders");

        const data = await response.json();
        dispatch(getOrders(data.orders));
        return data;
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
};

// UPDATE -----------------------------------

export const updateOrder = (orderId, productId, quantity) => async (dispatch) => {

    if (quantity === 0) {
        dispatch(deleteOrder(orderId));
    }
    
    try {
        const response = await fetch(`/api/orders/details/${orderId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                orderId,
                productId,
                quantity,
            }),
        });
    
        if (!response.ok) throw new Error ("Failed to update order");
        
        const order = await response.json();
        dispatch(updateAnOrder(order));
        return order;
    } catch (error) {
        console.error("Error updating order:", error);
    }
};

export const updateReturnOrder = (orderId) => async (dispatch) => {
    try {
        const response = await fetch(`api/orders/return/${orderId}`, {
            method: "PATCH",
            headers: { "Content-Type": "applicatoin/json" },
            body: JSON.stringify({ orderId }),
        });

        if (!response.ok) throw new Error("Failed to update order");

        const order = await response.json();
        dispatch(updateAnOrder(order));
        return order;
    } catch (error) {
        console.error("Error updating order:", error);
    }
}

// DELETE -----------------------------------

export const deleteOrder = (orderId, productId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders/details/${orderId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                orderId,
                productId,
            }),
        });

        if (!response.ok) throw new Error("Failed to delete order");

        dispatch(deleteAnOrder(orderId));
        return response;
    } catch (error) {
        console.error("Error deleting order", error);
    }
};

// REDUCER ----------------------------------

const initialState = {};

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
    case GET_ORDERS:
        return action.orders.reduce((acc, order) => {
            acc[order.id] = order;
            return acc;
        }, {});
    case ADD_ORDER:
        return { ...state, [action.order.id]: action.order };
    case UPDATE_ORDER:
        return { ...state, [action.order.id]: action.order };
    case DELETE_ORDER:
        const newState = { ...state };
        delete newState[action.orderId];
        return newState;
    default:
        return state;
    };
};