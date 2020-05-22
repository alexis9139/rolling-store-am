import React, { Component, Children } from 'react';
import './App.css';
import Main from './pages/Main';
import Results from './pages/Results';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import ProductInfo from './pages/ProductInfo';
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import Categorias from './components/Categorias';
import Caro from './components/Caro';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { firebaseApp } from './Firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Alexis',
      products: [],
      product: {},
      results: [],
      term: ''
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.updateList = this.updateList.bind(this);
    this.saludar = this.saludar.bind(this);

    this.productsRef = firebaseApp.database().ref().child('products');
    console.log('this.productsRefs:::::', this.productsRef);
  }


  componentDidMount() {
    this.listenForProducts(this.productsRef);
  }

  searchProductForId(id) {
    const { products } = this.state;
    const product = products.filter(p => p.id == id);
    this.setState({ product })
  }

  //se hara una lectura de los datos
  listenForProducts(productsRef) {
    //products.push lo guarde
    productsRef.on('value', snap => {//con on quedo escuchando los cambios
      let products = [];
      snap.forEach(child => {
        products.push({
          name: child.val().name,
          brand: child.val().brand,
          price: child.val().price,
          video: child.val().video,
          id: child.val().id,
        });
      })
      this.setState({ products })
    });
  }

  saludar() {
    alert("hola")
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
    const { username, products, term, results, product } = this.state;
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);
    const searchProductForId = this.searchProductForId.bind(this);
    const saludar = this.saludar.bind(this);

    return (
      <Router>
        <CustomHeader
          username={username}
          term={term}
          updateTerm={updateTerm}
          updateList={updateList}
          products={products}
          saludar={saludar}
        />




        <Switch>
          <Route path="/results">
            <div className='App-container'>
              <Results
                results={results}
                searchProductForId={searchProductForId}
              />
            </div>
          </Route>
          <Route path="/product">
            <div className='App-container'>
              <Product
              />
            </div>
          </Route>

          <Route path="/cart">
            <div className='App-container'>
              <Cart
              />
            </div>
          </Route>


          <Route path="/products/:id">
            <div className='App-container'>
              <ProductInfo
                product={product}
              />
            </div>
          </Route>

          <Route path="/success">
            <div className='App-container'>
              <Success
              />
            </div>
          </Route>


          <Route path="/">
            <div className='App-container'>
              <Main
                products={products}
                searchProductForId={searchProductForId}
              />
            </div>
          </Route>
        </Switch>
        {/* <Categorias /> */}
        {/* <Caro></Caro> */}
        <CustomFooter />
      </Router>
    );
  }
}