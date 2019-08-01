import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import SignPage from '../src/pages/sign/sign.component';
import Header from './components/header/header.component';

import './App.css';




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
