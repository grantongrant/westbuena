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
    try {
        const response = await fetch('/api/favorites/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, productId }),
        });

        if (!response.ok) throw new Error ("Failed to add favorite");

        const product = await response.json();
        dispatch(addToFavorites(product));
        return product;
    } catch (error) {
        console.error("Error adding favorite:", error);
    }
}

// READ

export const getAllFavorites = (userId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/favorites/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch favorites");

        const data = await response.json();
        dispatch(getFavorites(data.favorites));
        return data;
    } catch (error) {
        console.error("Error fetching favorites:", error);
    }
};

// DELETE

export const removeFromFavoritesList = (userId, productId) => async (dispatch) => {
    try {
        const response = await fetch('/api/favorites/delete', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, productId }),
        });

        if (!response.ok) throw new Error ("Failed to delete favorite");

        const { id } = await response.json();
        dispatch(deleteAFavorite(id));
        return id;
    } catch (error) {
        console.error("Error deleting favorite:", error);
    }
};

// REDUCER

const initialState = {};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_FAVORITES:
        return action.favorites.reduce((acc, favorite) => {
            acc[favorite.id] = favorite;
            return acc;
        }, {});
    case ADD_FAVORITE:
        return { ...state, [action.product.id]: action.product };
    case DELETE_FAVORITE:
        const newState = {...state}
        delete newState[action.favoriteId];
        return newState;
    default:
        return state;
    };
};
