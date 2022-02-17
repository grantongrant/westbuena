import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs';
import Account from './Account';
import Shoppingcart from './Shoppingcart';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);
  const [categories, setCategories] = useState();

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <nav className="login-signup">
  //       <NavLink to="/login"><button id="log-in-button">Log In</button></NavLink>
  //       <NavLink to="/signup"><button id="sign-up-button">Sign Up</button></NavLink>
  //     </nav>
  //   );
  // }

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

  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to='/' exact={true} activeClassName='active'>
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/login' exact={true} activeClassName='active'>
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/sign-up' exact={true} activeClassName='active'>
  //           Sign Up
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/users' exact={true} activeClassName='active'>
  //           Users
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/shoppingcart' exact={true} activeClassName='active'>
  //           Shopping Cart
  //         </NavLink>
  //       </li>
  //       <li>
  //         <LogoutButton />
  //       </li>
  //     </ul>
  //     <ul>{categoryComponents}</ul>
  //   </nav>
  // );
}

export default NavBar;
