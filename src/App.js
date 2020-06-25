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
// import { firebaseApp } from './Firebase';
import Error404 from './pages/Error404';
import 'react-credit-cards/es/styles-compiled.css';
import { connect } from 'react-redux';
import { getVisibleProducts } from './reducers/products'
import { firebaseApp } from './Firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const NoMatchPage = () => {
  return (
    <Error404></Error404>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: '',
      isSignedIn: false
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
      firebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebaseApp.auth.TwitterAuthProvider.PROVIDER_ID,
      firebaseApp.auth.GithubAuthProvider.PROVIDER_ID,
      firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
      console.log("isSignedIn", this.state.isSignedIn)
    })
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(newList, term) {
    term !== '' ?
      this.setState({
        results: newList,
        term
      })
      :
      this.setState({ results: [] })
  }

  render() {
    const { term, results } = this.state;
    const { products } = this.props
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);

    return (
      <>
        {this.state.isSignedIn ? (
          <Router>
            <CustomHeader
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
        ) :
          (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebaseApp.auth()}
            />
          )
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps)(App)
