import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import SignPage from '../src/pages/sign/sign.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';




class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  //Method for unsubcribe
  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignPage}/>
        </Switch>
        
      </div>
    );
  }
  
  
  
}

export default App;
