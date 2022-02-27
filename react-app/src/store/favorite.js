const ADD_FAVORITE = 'favorite/ADD_FAVORITE';
const GET_FAVORITES = 'favorite/GET_FAVORITES';
const DELETE_FAVORITE = 'favorite/DELETE_FAVORITE';

const addToFavorites = (product) => ({
    type: ADD_FAVORITE,
    product,
})

const getFavorites = (favorites) => ({
    type: GET_FAVORITES,
    favorites,
  });

const deleteAFavorite = (favoriteId) => ({
    type: DELETE_FAVORITE,
    favoriteId,
})

// -----------------------------------------------

// CREATE

export const addToFavoritesList = (userId, productId) => async (dispatch) => {
    const response = await fetch('/api/favorites/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            productId,
        })
    });

    if (response.ok) {
        const product = await response.json();
        if (product.errors) {
            return;
        } else {
            dispatch(addToFavorites(product));
        }
        return product;
    };
}

// READ

export const getAllFavorites = (userId) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${userId}`);
  
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getFavorites(data.favorites));
        return data;
    };
};

// DELETE

export const removeFromFavoritesList = (userId, productId) => async (dispatch) => {
    const response = await fetch('/api/favorites/', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            productId
        })
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(deleteAFavorite(data.id));
    } else {
        return response;
    }
};

// REDUCER

export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
    case GET_FAVORITES:
        return { ...action.favorites };
    case ADD_FAVORITE:
            newState = {...state, ...action.products}
            return newState;
    case DELETE_FAVORITE:
            newState = {...state}
            let values = Object.values(newState)
            for (let i = 0; i < values.length; i++) {
                if (values[i].id === action.favoriteId) {
                    delete values[i]
                }
                newState = {...values};
            }
            return newState;
    default:
        return state;
    };
};
