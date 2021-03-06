import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getSaleProducts } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import {FaHeart} from 'react-icons/fa';
import "./Products.css";
import { addToFavoritesList, removeFromFavoritesList } from '../../store/favorite';


function SalePage() {
  
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)

    useEffect(() => {
      dispatch(getSaleProducts())
    }, [dispatch]);

    const addToFavs = async (product) => {
      if (!user) {
        alert(`We agree. ${product.name} is a great product. Please sign in or create an account to save your favorites.`)
        return;
      } else {
        await dispatch(addToFavoritesList(user.id, product.id))
        await dispatch(getSaleProducts())
      }
    }

    const removeFromFavs = async (productId) => {
      await dispatch(removeFromFavoritesList(user.id, productId))
      await dispatch(getSaleProducts())
    }

    const categoryComponents = products?.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              {product.favorites.includes(user?.id) ?
              <div className="favorited-icon-category-page" onClick={() => {removeFromFavs(product.id)}}><FaHeart/></div> :
              <div className="favorite-icon-category-page" onClick={() => {addToFavs(product)}}><FaHeart/></div>} 
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
      </>
    )
}

export default SalePage;