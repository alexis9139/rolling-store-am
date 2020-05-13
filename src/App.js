import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main';
import Results from './components/Results';
//importacion de Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);//para poder usar el this
    this.state = {
      userName: 'Alexs',
      products: [
        {
          id: 'prod01',
          name: 'notebook',
          brand: 'Asus',
          price: 45000
        },
        {
          id: 'prod02',
          name: 'indumentaria',
          brand: 'Adidas',
          price: 3700
        },
        {
          id: 'prod03',
          name: 'juegos consola',
          brand: 'PS4',
          price: 4500
        }
      ]
    }
  }

  render() {
    const { userName, products } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/results">
            <div className="App-container">
              <Results userName={userName} products={products} />
            </div>
          </Route>
          <Route path="/" exact>
            <div className="App-container">
              <Main userName={userName} products={products} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }

}
