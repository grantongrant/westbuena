import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import {FaHeart} from 'react-icons/fa';

import "./Products.css";
import { addToFavoritesList } from '../../store/favorite';

function CategoryPage() {
  
    const { category } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)
    // const [productId, setProductId] = useState();
    console.log(user)

    useEffect(() => {
      dispatch(getProductsByCategory(category))
    }, [dispatch, category]);

    const addToFavs = (productId) => {
      // console.log(productId)
      dispatch(addToFavoritesList(user.id, productId))
    }

    const categoryComponents = products?.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              <div className="favorite-icon-category-page" onClick={() => {
                // setProductId(product.id);
                addToFavs(product.id)}}>
                <FaHeart/>
              </div> 
              <div className="product-images"><NavLink to={`/products/${product.id}`}>
                <img className="image-1" src={product.image_url1} alt="product"/>
                <img className="image-2" src={product.image_url2} alt="product"/>
                </NavLink></div>
            </div>
            <div className="product-name-card">{product.name}</div>
            <div className="shipping-and-price">
              <div className="free-shipping-product">Free Shipping</div>
              <div className="product-price-card-discount">{product.discount?`$${product.original_price}`: null}</div>
              <div className="product-price-card-discount-text">{product.discount? 'Limited Time Offer' : null}</div>
              <div className="product-price-card">${product.final_price}</div>
            </div>
          </div>
        );
      });

    return (
      <>
        <div className="category-container">
          <>
            {categoryComponents}
          </>
        </div>
      </>
    )
}

export default CategoryPage;