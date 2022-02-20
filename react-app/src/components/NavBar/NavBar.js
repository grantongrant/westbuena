import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from './Account';
import Shoppingcart from './Shoppingcart';
import './NavBar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';

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
          <p>Up to 60% off warehouse deals</p>
          <span className="rightarrow"><BsArrowRightShort/></span>
          <p> | </p>
          <p>Up to 40% off in-stock furniture</p>
          <span className="rightarrow"><BsArrowRightShort/></span>
          <p>|</p>
          <p>Up to 30% off bedding</p>
          <span className="rightarrow"><BsArrowRightShort/></span>
        </div>
      </div>
      <div className="technologies">
        <NavLink to="/"><div className="west-buena"><p>west buena</p></div></NavLink>
        <div className="my-name"><p>grant</p><p id="last-name">russell</p></div>
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
        </div>
      </div>
      <div className="global-navigation">
        <div className="search-container">
          <p>search bar here</p>
        </div>
        <div className="left-container">
          <NavLink id="logo-font" exact to="/">
            west buena
          </NavLink>
        </div>
        <div className="right-container">
          <div className="account-icon"><Account /></div>
          <div className="shoppingcart-icon"><Shoppingcart /></div>
        </div>
      </div>
      <div className="secondary-navigation">
        <div className="secondary-content">
          <p>design & values</p>
          <p id="spacer"> | </p>
          <p>hire me</p>
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
