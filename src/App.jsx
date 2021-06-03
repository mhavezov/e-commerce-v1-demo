import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/product' component={ProductDetails} />
        <Route path='/cart' components={CartPage} />
      </Switch>
    </>
  );
}

export default App;
