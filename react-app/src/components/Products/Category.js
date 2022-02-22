import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getProductsByCategory } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import "./Products.css";

function CategoryPage() {
  
    const { category } = useParams();
    const dispatch = useDispatch();
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)

    useEffect(() => {
      dispatch(getProductsByCategory(category))
    }, [dispatch, category]);

    const categoryComponents = products?.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              <div><NavLink to={`/products/${product.id}`}><img src={product.image_url1} alt="product"/></NavLink></div>
            </div>
            <div className="product-name-card">{product.name}</div>
            <div className="shipping-and-price">
              <div className="free-shipping-product">Free Shipping</div>
              <div className="product-price-card">${product.final_price}</div>
            </div>
          </div>
        );
      });

    return (
        <div className="category-container">
          <>
            {categoryComponents}
          </>
        </div>
    )
}

export default CategoryPage;