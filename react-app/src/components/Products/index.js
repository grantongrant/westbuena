import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneproduct } from '../../store/product';
import { addToCart } from '../../store/shoppingcart';

function ProductPage() {

    const { productId } = useParams();
    const dispatch = useDispatch(); 
    const product = useSelector((state) => state.product)
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getOneproduct(productId))
      }, [dispatch, productId]);

    const addToShoppingcart = () => {
        const quantity = 1;
        return dispatch(addToCart(user.id, parseInt(productId, 10), quantity))
    }

    return (
        <>
            <h1>Product: </h1>
            <ul>{product.name}</ul>
            <button type="button" onClick={addToShoppingcart}>Add To Cart</button>
            <ul><img src={product.image_url1} alt="product"/></ul>
        </>
    );
};

export default ProductPage;