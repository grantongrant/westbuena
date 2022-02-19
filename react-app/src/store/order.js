const GET_ORDERS = 'order/GET_ORDERS';

// CREATE -----------------------------------
// READ -------------------------------------

const getOrders = (orders) => ({
    type: GET_ORDERS,
    orders,
  });

// UPDATE -----------------------------------
// DELETE -----------------------------------

// CREATE -----------------------------------
// READ -------------------------------------

export const getAllOrders = (userId) => async (dispatch) => {
    const response = await fetch(`/api/shoppingcart/${userId}`);
  
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
// DELETE -----------------------------------

// REDUCER ----------------------------------

export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
    case GET_ORDERS:
        action.orders.forEach(order => {
            newState[order.id] = {...order}
        });
        return newState
    default:
        return state;
    };
};