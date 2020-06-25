import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ModalImage from "react-modal-image";

export default class ProductCard extends Component {
    getPhoto(prodId) {
        return `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${prodId}.png?alt=media`
    }
    render() {
        const { name, brand, price, id } = this.props.product;
        return (
            <div style={{ cursor: 'pointer', margin: 20 }}>
                <div className="product-card" >
                    <div className="product-imageContainer">
                        {/* <img src={this.getPhoto(id)} className="product-image" alt="product" /> */}
                        <ModalImage
                            className="product-image"
                            // className="imagen-alto"
                            // small={this.props.product.img}
                            // large={this.props.product.img}
                            small={this.getPhoto(id)}
                            large={this.getPhoto(id)}
                            hideDownload={true}
                            hideZoom={true}
                            showRotate={true}
                            alt=""
                        />
                        <Link to={{
                            pathname: '/product/' + id,
                            state: {
                                product: this.props.product
                            }
                        }}
                        >
                            <div className="color-texto-presentacion">
                                <div>Producto: {name} </div>
                                <div>Marca: {brand} </div>
                                <div>Precio: ${price} </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
