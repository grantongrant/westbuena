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
    const response = await fetch('/api/orders/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            order_number,
            user_id,
            product_id,
            quantity,
            price,
            sales_tax,
            total,
        })
    });

    if (response.ok) {
        const order = await response.json();
        if (order.errors) {
            return;
        } else {
            dispatch(addOrder(order))
        };
        return order;
    };
};

// READ -------------------------------------

export const getAllOrders = (userId) => async (dispatch) => {
    const response = await fetch(`/api/orders/${userId}`);
  
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getOrders(data.orders));
        return data;
    };
};

// UPDATE -----------------------------------

export const updateOrder = (orderId, productId, quantity) => async (dispatch) => {

    console.log(quantity)
    console.log(orderId)

    if (quantity === 0) {
        dispatch(deleteOrder(orderId));
    } else {
        const response = await fetch(`/api/orders/details/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId,
                productId,
                quantity,
            })
        });
    
        if (response.ok) {
            const order = await response.json();
            console.log(order)
            if (order.errors) {
                return;
            } else {
                dispatch(updateAnOrder(order))
            }
            return order;
        };

    }    
};

// DELETE -----------------------------------

export const deleteOrder = (orderId, productId) => async (dispatch) => {
    const response = await fetch(`/api/orders/details/${orderId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderId,
            productId,
        })
    });

    if (response.ok) {
        dispatch(deleteAnOrder(orderId));
    } else {
        return response;
    }
};

// REDUCER ----------------------------------

export default function reducer(state = {}, action) {
    let newState
    switch (action.type) {
    case GET_ORDERS:
        newState = {};
        action.orders.forEach(order => {
            newState[order.id] = {...order}
        });
        return newState;
    case ADD_ORDER:
        newState = {...state, ...action.order}
        return newState;
    case UPDATE_ORDER:
        newState = {...state}
        let array = Object.values(newState)
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === action.order.id) {
                array[i] = action.order
            }
            newState = {...array}
        }
        return newState;
    case DELETE_ORDER:
        newState = {...state}
        let values = Object.values(newState)
        for (let i = 0; i < values.length; i++) {
            if (values[i].id === action.orderId) {
                delete values[i]
            }
            newState = {...values};
        }
        return newState;
    default:
        return state;
    };
};