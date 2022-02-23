const GET_SEARCH = 'search/GET_SEARCH';


const getSearchedProducts = (products) => ({
    type: GET_SEARCH,
    products,
  });

  export const getProductsBySearch = (query) => async (dispatch) => {
    console.log(query)
    const response = await fetch(`/api/search/${query}`);
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };
        dispatch(getSearchedProducts(data.products));
        return data;
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
    case GET_SEARCH:
        return { ...action.products }
    default:
        return state;
    };
};