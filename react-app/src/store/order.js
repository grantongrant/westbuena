const GET_ORDERS = 'order/GET_ORDERS';
const ADD_ORDER = 'order/ADD_ORDER';

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
// DELETE -----------------------------------

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

export const updateOrder = () => async (dispatch) => {
    return "hello";
}
// DELETE -----------------------------------

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
    default:
        return state;
    };
};