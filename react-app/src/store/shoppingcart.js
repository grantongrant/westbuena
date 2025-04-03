const GET_CART = 'shoppingcart/GET_CART';
const ADD_TO_CART = 'shoppingcart/ADD_TO_CART';
const UPDATE_CART = 'shoppingcart/UPDATE_CART';
const DELETE_ITEM = 'shoppingcart/DELETE_ITEM';
const CLEAR_CART = 'shoppingcart/CLEAR_CART';

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
const updateShoppingcart = (item) => ({
    type: UPDATE_CART,
    item,
})

// DELETE -----------------------------------

const deleteOneItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId,
})

const deleteAllItems = () => ({
    type: CLEAR_CART,
})

// ------------------------------------------

// CREATE -----------------------------------
export const addToCart = (userId, productId, quantity) => async (dispatch) => {
    try {
        const response = await fetch('/api/shoppingcart/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                productId,
                quantity,
            }),
        });

        if (!response.ok) throw new Error ("Failed to add to Cart")

        const item = await response.json();
        dispatch(addToShoppingCart(item));
        return item;
    } catch (error) {
        console.error("Error adding item to shopping cart:", error);
    }
}

// READ --------------------------------------
export const getAllShoppingcart = (userId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/shoppingcart/${userId}`);

        if (!response.ok) throw new Error ("Failed to fetch shopping cart.");

        const data = await response.json();
        dispatch(getShoppingcart(data.items));
        return data;
    } catch (error) {
        console.error("Error fetching shopping cart:", error);
    }
};

// UPDATE ------------------------------------
export const updateCart = (userId, productId, quantity) => async (dispatch) => {
    try {
        const response = await fetch('/api/shoppingcart/', {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                productId,
                quantity
            }),
        });

        if (!response.ok) throw new Error("Failed to update shopping cart");

        const item = await response.json();
        if (item.quantity === 0) {
            dispatch(deleteCartItem(item));
        } else {
            dispatch(updateShoppingcart(item));
        }

        return item;
    } catch (error) {
        console.error("Error updating shopping cart");
    }
};

// DELETE ------------------------------------

export const deleteCartItem = (item) => async (dispatch) => {
    try {
        const response = await fetch('/api/shoppingcart/', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ item }),
        });

        if (!response.ok) throw Error ("Failed to delete shopping cart item");
        dispatch(deleteOneItem(item.id));
    } catch (error) {
        console.error("Error deleting shopping cart item:", error);
    }
};

export const clearCart = (items) => async (dispatch) => {
    try {
        const response = await fetch('/api/shoppingcart/clear', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ items }),
        });

        if (!response.ok) throw new Error ("Failed to clear shopping cart");
        dispatch(deleteAllItems());
    } catch (error) {
        console.error("Error clearing shopping cart:", error);
    }
};


// REDUCER

const initialState = {};

export default function shoppingcartReducer(state = initialState, action) {
    switch (action.type) {
    case GET_CART:
        return action.items.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {});
    case ADD_TO_CART:
        return { ...state, [action.data.id] : action.data };
    case UPDATE_CART:
        return { ...state, [action.item.id]: action.item };
    case DELETE_ITEM:
        const newState = { ...state }
        delete newState[action.itemId];
        return newState;
    default:
        return state;
    }
};