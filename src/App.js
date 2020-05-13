import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Main from './components/Main'

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
      <div className="App" >
        <header className="App-container">
          <Main userName={userName} products={products} />
        </header>
      </div>
    );
  }

}
