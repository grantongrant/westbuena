import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LogoutButton from '../auth/LogoutButton'

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);
  const [categories, setCategories] = useState();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <nav className="login-signup">
        <h1>Hi</h1>
      </nav>
    );
  }

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
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/shoppingcart' exact={true} activeClassName='active'>
            Shopping Cart
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <ul>{categoryComponents}</ul>
    </nav>
  );
}

export default NavBar;
