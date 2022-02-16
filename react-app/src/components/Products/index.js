import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneproduct } from '../../store/product';

function ProductPage() {

    const { productId } = useParams();
    const dispatch = useDispatch(); 
    const product = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getOneproduct(productId))
      }, [dispatch, productId]);

    return (
        <>
            <h1>Product: </h1>
            <ul>{product.name}</ul>
            <ul><img src={product.image_url1} alt="product"/></ul>
        </>
    );
};

export default ProductPage;