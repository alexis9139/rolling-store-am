import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Results from './pages/Results';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { firebaseApp } from './Firebase';
import Error404 from './pages/Error404';
import 'react-credit-cards/es/styles-compiled.css';
import { connect } from 'react-redux';
import { getVisibleProducts } from './reducers/products'


const NoMatchPage = () => {
  return (
    <Error404></Error404>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: 'Alex',
      // products: [],
      results: [],
      term: '',
      // cart: {
      //   productToBuy: {},
      //   creditCard: '',
      //   shippingAddress: ''
      // }
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.updateList = this.updateList.bind(this);
    // this.updateCart = this.updateCart.bind(this);
    this.productsRef = firebaseApp.database().ref().child('products');
  }

  componentDidMount() {
    this.listenForProducts(this.productsRef);
  }

  listenForProducts(productsRef) {
    productsRef.on('value', snap => {
      let products = [];
      snap.forEach(child => {
        products.push({
          name: child.val().name,
          brand: child.val().brand,
          price: child.val().price,
          description: child.val().description,
          shippingTime: child.val().shippingTime,
          video: child.val().video,
          id: child.val().id
        });
      });

      this.setState({ products });
    });
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

  // updateCart(creditCard = '', shippingAddress = '') {
  //   this.setState({
  //     cart: {
  //       creditCard,
  //       shippingAddress
  //     }
  //   })
  // }




  render() {
    const { term, results } = this.state;
    const { products } = this.props
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);
    // const updateCart = this.updateCart.bind(this);

    return (
      <Router>
        <CustomHeader
          // username={username}
          term={term}
          updateTerm={updateTerm}
          updateList={updateList}
          products={products}
        />

        <Switch>
          <Route exact path="/results">
            <div className='App-container'>
              <Results
                results={results}
              />
            </div>
          </Route>

          <Route exact
            path="/product/:id"
            render={props =>
              <div className='App-container'>
                <Product {...props} />
              </div>
            }>
          </Route>

          <Route exact
            path="/cart"
            render={props =>
              <div className='App-container'>
                <Cart {...props} />
              </div>
            }>
          </Route>

          <Route exact path="/success">
            <div className='App-container'>
              <Success
              />
            </div>
          </Route>

          <Route exact path="/">
            <div className='App-container'>
              <Main
                products={products}
              />
            </div>
          </Route>

          {/* PAGINA ERROR */}
          <Route component={NoMatchPage} />
        </Switch>

        <CustomFooter />
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps)(App)
