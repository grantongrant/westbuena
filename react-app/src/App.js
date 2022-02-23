import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ProductPage from './components/Products';
import CategoryPage from './components/Products/Category';
import ShoppingCartPage from './components/ShoppingCart';
import Authenticate from './components/auth';
import OrdersPage from './components/Orders';
import OrderReview from './components/ShoppingCart/OrderReview';
import CheckoutPage from './components/ShoppingCart/Checkout';
import SplashPage from './components/SplashPage';
import "./index.css";
import SalePage from './components/Products/Sale';
import Footer from './components/Footer';
import SearchResult from './components/Search/SearchResult';


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
          <Authenticate/>
        </Route>
        <Route path="/shoppingcart" exact={true}>
          <ShoppingCartPage />
        </Route>
        <Route path="/orders" exact={true}>
          <OrdersPage />
        </Route>
        <Route path="/shop/:category" exact={true}>
          <CategoryPage />
        </Route>
        <Route path="/shop/sale" exact={true}>
          <SalePage />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route exact path="/products/:productId">
          <ProductPage />
        </Route>
        <Route path="/search">
          <SearchResult />
        </Route>
        <Route exact path="/checkout">
          <OrderReview />
        </Route>
        <Route exact path="/checkout/thanks">
          <CheckoutPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
