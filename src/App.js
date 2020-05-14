import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Results from './components/Results';
import Cart from './components/Cart';
import Success from './components/Success';
import Product from './components/Product';

//importacion de imagenes de los productos
import img1 from './assets/img/juegos/imagen1.jpg';
import img2 from './assets/img/juegos/imagen2.jpg';
import img3 from './assets/img/juegos/imagen3.jpg';
import img4 from './assets/img/juegos/imagen4.jpg';
import img5 from './assets/img/juegos/imagen5.jpg';



//importacion de Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);//para poder usar el this
    this.state = {
      userName: 'Alexs',
      products: [
        {
          id: 'prod01',
          name: 'FIFA',
          brand: 'PS4',
          price: 2800,
          img: img1
        },
        {
          id: 'prod02',
          name: 'God Of War',
          brand: 'PS4',
          price: 2500,
          img: img2
        },
        {
          id: 'prod03',
          name: 'Cyberpunk 2077',
          brand: 'PS4',
          price: 4500,
          img: img3
        },
        {
          id: 'prod03',
          name: 'Dark Soul',
          brand: 'PS4',
          price: 1200,
          img: img4
        },
        {
          id: 'prod03',
          name: 'Resident Evil',
          brand: 'PS4',
          price: 4200,
          img: img5
        }
      ],
      results: [],
      term: ''
    }
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(newList, term) {
    const { products } = this.state;
    term !== '' ?
      this.setState({
        results: newList,
        term
      }) :
      this.setState({ results: products })
  }

  render() {
    const { userName, products, term, results } = this.state;
    //armo el bindeo
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);
    return (
      <Router>
        <Switch>
          <Route path="/results">
            <div className="App-container">
              <Results userName={userName}
                results={results}
                term={term}
              />
            </div>
          </Route>

          <Route path="/cart">
            <div className="App-container">
              <Cart userName={userName}
              // results={results}
              // term={term}
              />
            </div>
          </Route>

          <Route path="/success">
            <div className="App-container">
              <Success userName={userName}
              // results={results}
              // term={term}
              />
            </div>
          </Route>

          <Route path="/product">
            <div className="App-container">
              <Product userName={userName}
              // results={results}
              // term={term}
              />
            </div>
          </Route>

          <Route path="/" exact>
            <div className="App-container">
              <Main
                userName={userName}
                products={products}
                updateTerm={updateTerm}
                term={term}
                updateList={updateList}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }

}
