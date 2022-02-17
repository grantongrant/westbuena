import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllProducts } from '../store/product';

function UsersList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const productObject = useSelector((state) => state.product)
  const products = Object.values(productObject)
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.full_name}</NavLink>
      </li>
    );
  });

  const productComponents = products?.map((product) => {
    return (
      <li key={product.id}>
        <NavLink to={`/products/${product.id}`}><img src={product.image_url1} alt="product"/></NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
      <ul>{productComponents}</ul>
    </>
  );
}

export default UsersList;
