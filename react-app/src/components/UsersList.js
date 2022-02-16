import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);
  console.log(users)
  const [products, setProducts] = useState();
  console.log(products)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      console.log(response)
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/products/');
      console.log(response)
      const responseData = await response.json();
      setProducts(responseData.products);
    }
    fetchData();
  }, []);

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
        <NavLink to={`/products/${product.id}`}><img src={product.image_url1}/></NavLink>
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
