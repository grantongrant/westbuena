import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ProductPage from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CategoryPage from './components/Products/Category';
import ShoppingCartPage from './components/ShoppingCart';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
          <SignUpForm />
        </Route>
        <Route path="/shoppingcart" exact={true}>
          <ShoppingCartPage />
        </Route>
        <Route path="/shop/:category" exact={true}>
          <CategoryPage />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>Splash Page</h1>
        </Route>
        <Route exact path="/products/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
