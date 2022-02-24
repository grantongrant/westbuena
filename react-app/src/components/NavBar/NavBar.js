import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from './Account';
import Shoppingcart from './Shoppingcart';
import './NavBar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import SearchBar from '../Search/SearchBar';
// import { GoHeart } from "react-icons/go";

const NavBar = () => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/products/categories');
      const responseData = await response.json();
      setCategories(responseData.categories);
    }
    fetchData();
  }, []);

  const categoryComponents = categories?.map((category) => {
    return (
      <li className="category-list-content" key={category.id}>
        <NavLink to={`/shop/${category.name}`}>{category.title}</NavLink>
      </li>
    );
  });

  return (
    <header className="navigation-header">
      <div className="global-promo">
        <div className="promo-content">
          <NavLink to="/shop/sale"><p>Up to 60% off greenhouse deals</p></NavLink>
          <span className="rightarrow"><BsArrowRightShort/></span>
          <p> | </p>
          <NavLink to="/shop/botanicals"><p>Up to 40% off in-stock botanicals</p></NavLink>
          <span className="rightarrow"><BsArrowRightShort/></span>
          <p>|</p>
          <NavLink to="/shop/seeds"><p>Up to 30% off seeds</p></NavLink>
          <span className="rightarrow"><BsArrowRightShort/></span>
        </div>
      </div>
      <div className="technologies">
        <NavLink to="/"><div className="west-buena"><p>west buena</p></div></NavLink>
        <a href="https://linkedin.com/in/grant-ellis-russell" target="_blank" rel="noreferrer"><div className="my-name"><p>grant</p><p id="last-name">russell</p></div></a>
        <div className="technology-content">
          <li>javascript</li>
          <li>python</li>
          <li>react</li>
          <li>redux</li>
          <li>sqlalchemy</li>
          <li>html</li>
          <li>css</li>
          <li>amazon s3</li>
          <li>git</li>
          <li>docker</li>
          <li>heroku</li>
        </div>
      </div>
      <div className="global-navigation">
        <div className="search-container">
          <div><SearchBar /></div>
        </div>
        <div className="left-container">
          <NavLink id="logo-font" exact to="/">
            west buena
          </NavLink>
        </div>
        <div className="right-container">
          <div className="account-icon"><Account /></div>
          {/* <div className="favorite-icon"><GoHeart /></div> */}
          <div className="shoppingcart-icon"><Shoppingcart /></div>
        </div>
      </div>
      <div className="secondary-navigation">
        <div className="secondary-content">
          <NavLink to="/about"><p>design & values</p></NavLink>
          <p id="spacer"> | </p>
          <NavLink to="/about"><p>hire me</p></NavLink>
          <span className="downarrow"><AiFillCaretDown/></span>
        </div>
      </div>
      <div className="category-list">
        {categoryComponents}
        <li id="sale" className="category-list-content" key="sale">
        <NavLink to="/shop/sale">SALE</NavLink>
      </li>
      </div>
    </header>
  )
}

export default NavBar;
