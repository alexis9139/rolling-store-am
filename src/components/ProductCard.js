import React, { Component, Fragment } from 'react';

import { Card } from 'antd';

import ModalImage from "react-modal-image";

import { QuestionOutlined } from '@ant-design/icons';

import { Redirect } from 'react-router-dom'


export default class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToProductInfo: false
        }
        this.searchProductForId = this.props.searchProductForId.bind(this);
    }

    renderRedirectToProductInfo = (id) => {
        if (this.state.redirectToProductInfo) {
            return <Redirect to={`/products/${id}`} />
        }
    }

    setRedirectInfoToProduct = (id) => {
        this.setState({
            redirectToProductInfo: true
        })
        this.props.searchProductForId(id);
    }

    getPhoto(id) {
        let imagen = `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${id}.png?alt=media`;
        return imagen;
    }

    render() {
        const { name, brand, price, id } = this.props.product;
        return (
            <Fragment>
                {this.renderRedirectToProductInfo(id)}
                <div
                    className="product-card"

                >

                    <ModalImage className="imagen-alto"
                        // small={this.props.product.img}
                        // large={this.props.product.img}
                        small={this.getPhoto(id)}
                        large={this.getPhoto(id)}
                        hideDownload={true}
                        hideZoom={true}
                        showRotate={true}
                        alt=""
                    />
                    <div
                        className="descripcion-producto"
                        onClick={() => this.setRedirectInfoToProduct(id)}>
                        <div>Producto: {name} </div>
                        <div>Marca: {brand} </div>
                        <div>$ {price}</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}