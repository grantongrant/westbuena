import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import "./Search.css";
import { getProductsBySearch } from '../../store/search';

const SearchResult = () => {

    const { search } = window.location;
    const dispatch = useDispatch();
    const query = new URLSearchParams(search).get("q");
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)
    console.log(query)

    useEffect(() => {
      dispatch(getProductsBySearch(query))
    }, [dispatch, query]);

    // useEffect(() => {
    //     async function fetchData() {
    //       const query = new URLSearchParams(search).get('q')
    //       console.log(query)
    //       const response = await fetch(`/api/search/${query}`);
    //       const responseData = await response.json();
    //       console.log(responseData)
    //       setProducts(responseData.products)
    //       }
    //       fetchData();
    //     }, [query, search]);

    const isLoading =
        <div className="isLoading"></div>
    
    const productNotFound = 
        <div className="search-not-found">
            <div className="search-content">
                <h2>We couldn't find any results for {query}</h2>
                <p>Try searching for something else instead?</p>
          </div>        
        </div>

    const results = products?.map((product) => {
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
        {products ? results : isLoading}
        </>
      )
}

export default SearchResult;