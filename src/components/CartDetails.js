import React, { Component, Fragment } from 'react';
import { Radio, Input, Button } from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkoutCart } from '../actions'
import { getTotal } from '../reducers'
import Credit from './CreditCard';
import { Link } from 'react-router-dom'
import { firebaseApp } from '../Firebase'

const { Group } = Radio;

class CartDetails extends Component {
    state = {
        creditCard: this.props.creditCard,
        shippingAddress: this.props.shippingAddress
    }

    onWriteAddress = e => {
        this.setState({ shippingAddress: e.target.value })
    }

    onSelectCreditCard = e => {
        this.setState({ creditCard: e.target.value })
    }

    render() {
        const { creditCard, shippingAddress } = this.state
        // const { product, updateCart } = this.props
        // const { total, updateCart } = this.props
        const { total, checkoutCart } = this.props
        const userName = firebaseApp.auth().currentUser.displayName;
        // const radioStyle = { display: 'block' }
        return (
            <Fragment>
                {/* <h3 style={{ textAlign: 'center' }}>Resumen de compra</h3> */}
                <h3 style={{ textAlign: 'center', color: 'black' }}>Resumen de compra</h3>
                <div className="cartDetails">
                    <p>Total: ${total}</p>
                    <p>¿Donde queres recibir tu compra?</p>
                    <Input value={shippingAddress} onChange={this.onWriteAddress} />
                    <p>Por favor ingresa datos de tu tarjeta</p>
                    <Group value={creditCard} onChange={this.onSelectCreditCard}>
                        {/* <Radio value='visa' style={radioStyle}>
                        <p style={{ color: 'white' }}>Visa</p>
                    </Radio>
                    <Radio value='mastercard' style={radioStyle}>
                        <p style={{ color: 'white' }}>MasterCard</p>
                    </Radio> */}
                        <Credit></Credit>
                    </Group>
                    {/* <Button onClick={() => updateCart(shippingAddress, creditCard)}>
                        Confirmar compra
                    </Button> */}
                    <Link to={{ pathname: '/success' }}>
                        {/* <Button onClick={() => updateCart(shippingAddress, creditCard)}>
                            Confirmar compra
                        </Button> */}
                        <Button onClick={() => checkoutCart(shippingAddress, creditCard, userName)}>
                            Confirmar compra
                        </Button>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

CartDetails.propTypes = {
    total: PropTypes.string.isRequired,
    // updateCart: PropTypes.func.isRequired
    checkoutCart: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    // { updateCart }
    { checkoutCart }
)(CartDetails)