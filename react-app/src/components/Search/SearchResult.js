import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import "./Search.css";
import "../Products/Products.css";
import { getProductsBySearch } from '../../store/search';
import { addToFavoritesList, removeFromFavoritesList } from '../../store/favorite';


const SearchResult = () => {

    const { search } = window.location;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const query = new URLSearchParams(search).get("q");
    const productObject = useSelector((state) => state.search)
    const products = Object.values(productObject)
    const [isLoaded, setIsLoaded] = useState(false)

    const addToFavs = async (product) => {
      if (!user) {
        alert(`We agree. ${product.name} is a great product. Please sign in or create an account to save your favorites.`)
        return;
      } else {
        await dispatch(addToFavoritesList(user.id, product.id))
        await dispatch(getProductsBySearch(query))
      }
    }

    const removeFromFavs = async (productId) => {
      await dispatch(removeFromFavoritesList(user.id, productId))
      await dispatch(getProductsBySearch(query))
    }

    useEffect(() => {
      dispatch(getProductsBySearch(query))
    }, [dispatch, query]);

    useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoaded(true)
      }, 500);
      return () => clearTimeout(timer);
  }, []);

    const isLoading =
        <div className="isLoading"></div>
    
    const productNotFound = (
        <div className="order-confirmation-container">
          <div className="order-confirmation-header">
          </div>
          <div className="order-confirmation-body">
              <div className="body-text1-search">We couldn't find results for "{query}."</div>
              <div className="body-text2">Check the spelling, try a more general term, or use fewer words.</div>
              <div className="body-text2">You can also browse our product catalog.</div>
              <NavLink to="/"><button className="cart-button white-brown-button">Continue Browsing</button></NavLink>
        </div>
      </div>
    )

    const productList = products?.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              {product.favorites.includes(user?.id) ?
              <div className="favorited-icon-category-page" onClick={() => {removeFromFavs(product.id)}}><FaHeart/></div> :
              <div className="favorite-icon-category-page" onClick={() => {addToFavs(product)}}><FaHeart/></div>}
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

      let results;

      if (products.length >=1) {
        results = productList
      } else {
        results = productNotFound
      }

      return (
        <>
        <div className="category-container">
          <>
        {isLoaded ? results : isLoading}
        </>
        </div>
        </>
      )
}

export default SearchResult;
