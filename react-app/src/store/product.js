const GET_PRODUCTS = 'product/GET_PRODUCTS';

const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products,
  });

export const getAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products/');
  
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getProducts(data.products));
        return data;
    };
};

export const getOneproduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`);

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getProducts(data));
        return data;
    };
}

export const getProductsByCategory = (category_name) => async (dispatch) => {
    const response = await fetch(`/api/products/${category_name}`);

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getProducts(data.products));
        return data;
    }
}

export const getSaleProducts = () =>async (dispatch) => {
    const response = await fetch('/api/products/sale');

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getProducts(data.products));
        return data;
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
    case GET_PRODUCTS:
        return { ...action.products }
    default:
        return state;
    };
};
