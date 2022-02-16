const GET_CART = 'shoppingcart/GET_CART';

const getShoppingcart = (items) => ({
    type: GET_CART,
    items,
});

export const getAllShoppingcart = (userId) => async (dispatch) => {
    const response = await fetch(`/api/shoppingcart/${userId}`);
  
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getShoppingcart(data.items));
        return data;
    };
};

export default function reducer(state = {}, action) {
    switch (action.type) {
    case GET_CART:
        return { ...action.items }
    default:
        return state;
    };
};