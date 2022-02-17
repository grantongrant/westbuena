const GET_CART = 'shoppingcart/GET_CART';
const ADD_TO_CART = 'shoppingcart/ADD_TO_CART';
const UPDATE_CART = 'shoppingcart/UPDATE_CART';
const DELETE_ITEM = 'shoppingcart/DELETE_ITEM';

// CREATE -----------------------------------
const addToShoppingCart = (data) => ({
    type: ADD_TO_CART,
    data,
})

// READ -------------------------------------
const getShoppingcart = (items) => ({
    type: GET_CART,
    items,
});

// UPDATE -----------------------------------
const updateShoppingcart = (data) => ({
    type: UPDATE_CART,
    data,
})

// DELETE -----------------------------------

const deleteOneItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId,
})

// ------------------------------------------

// CREATE -----------------------------------
export const addToCart = (userId, productId, quantity) => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            productId,
            quantity,
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addToShoppingCart(data));
        return data;
    } else {
        return response;
    }
}

// READ --------------------------------------
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

// UPDATE ------------------------------------
export const updateCart = (userId, productId, quantity) => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            productId,
            quantity
        })
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(updateShoppingcart(data));
        return data;
    };
};

// DELETE ------------------------------------

export const deleteCartItem = (item) => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            item
        })
    });

    if (response.ok) {
        console.log(item.id)
        dispatch(deleteOneItem(item.id));
    } else {
        return response;
    }
};


// REDUCER
export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
    case GET_CART:
        return { ...action.items };
    case ADD_TO_CART:
        newState = {...state, ...action.data}
        return newState;
    case UPDATE_CART:
        newState = {...state}
        console.log(newState)
        return newState;
    case DELETE_ITEM:
        newState = {...state}
        let values = Object.values(newState)
        for (let i = 0; i < values.length; i++) {
            if (values[i].id === action.itemId) {
                delete values[i]
            }
            newState = {...values};
        }
        return newState;
    default:
        return state;
    }
};