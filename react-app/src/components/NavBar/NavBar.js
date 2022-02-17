import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from './Account';
import Shoppingcart from './Shoppingcart';
import './NavBar.css'
import { BsArrowRight } from 'react-icons/bs';

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
      <li key={category.id}>
        <NavLink to={`/shop/${category.name}`}>{category.name}</NavLink>
      </li>
    );
  });

  return (
    <header className="navigation-header">
      <div className="global-promo">
        <div className="promo-content">
          <p>Up to 60% off warehosue deals <BsArrowRight/></p>
          <p> | </p>
          <p>Up to 40% off in-stock furniture <BsArrowRight/></p>
          <p>|</p>
          <p>Up to 30% off bedding <BsArrowRight/></p>
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
          <Account />
          <Shoppingcart />
        </div>
      </div>
      <div className="secondary-navigation">
        {categoryComponents}
      </div>
    </header>
  )
}

export default NavBar;
