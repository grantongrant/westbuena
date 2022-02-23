import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getSaleProducts } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import {FaHeart} from 'react-icons/fa';
import Footer from '../Footer';
import "./Products.css";

function SalePage() {
  
    const dispatch = useDispatch();
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)

    useEffect(() => {
      dispatch(getSaleProducts())
    }, [dispatch]);

    const categoryComponents = products?.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              <div className="favorite-icon-category-page"><FaHeart/></div> 
              <div><NavLink to={`/products/${product.id}`}>
                <img className="image-1" src={product.image_url1} alt="product"/>
                  <img className="image-2" src={product.image_url2} alt="product"/>
                </NavLink></div>
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
      <>
        <div className="category-container">
          <>
            {categoryComponents}
          </>
        </div>
        {/* <Footer /> */}
      </>
    )
}

export default SalePage;