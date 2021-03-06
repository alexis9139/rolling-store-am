import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../actions'
import { getTotal, getCartProducts, getInfoCustomer, getInfoShippingAddress, getInfoCreditCard } from '../reducers';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import ProductsInCart from '../components/ProductsInCart';
import CartDetails from '../components/CartDetails';

const { Content } = Layout;

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCard: '',
            shippingAddress: ''
        }
    }
    render() {
        const { shippingAddress, creditCard, products } = this.props
        return (
            <Layout>
                <Content className="content">
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            {/* <ProductCard product={product} /> */}
                            <ProductsInCart products={products} />
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <CartDetails
                                // product={product}
                                shippingAddress={shippingAddress}
                                creditCard={creditCard}
                            />
                            <Link to={{ pathname: '/' }} className="keepShopping-link">
                                Seguir comprando
                            </Link>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func
}

const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    customer: getInfoCustomer(state),
    shippingAddress: getInfoShippingAddress(state),
    creditCard: getInfoCreditCard(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(Cart)



