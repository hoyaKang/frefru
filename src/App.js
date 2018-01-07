import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import Order from './containers/Order/Order';
import FruitInfo from './containers/FruitInfo/FruitInfo';

class App extends Component {
  render() {

    //<Route path="/" exact component={}/>
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/fruit-info" component={FruitInfo}/>
              <Route path="/order" component={Order}/>
            </Switch>
          </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
