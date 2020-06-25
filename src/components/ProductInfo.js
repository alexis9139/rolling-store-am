import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
// import WhatsApp from '../components/ShareWhatsApp';
import GroupShare from '../components/GroupShare';
import Video from '../components/Video';
// import { HeartTwoTone } from '@ant-design/icons';
import Puntaje from '../components/Puntaje';
import {
    // Magnifier,
    // GlassMagnifier,
    SideBySideMagnifier,
    // PictureInPictureMagnifier,
    // MOUSE_ACTIVATION,
    // TOUCH_ACTIVATION,
    // MagnifierContainer,
    // MagnifierPreview,
    // MagnifierZoom
} from "react-image-magnifiers";
import PropTypes from 'prop-types';



class ProductInfo extends Component {
    getPhoto(prodId) {
        return `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${prodId}.png?alt=media`
    }

    render() {
        const { name, brand, price, id, description, shippingTime, video } = this.props.product;
        const { product, onAddToCartClicked } = this.props;

        return (
            <Fragment>
                <div className="productInfo">
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <div className="productInfo-imageContainer">
                                {/* <p>{name}</p> */}
                                {/* <img src={this.getPhoto(id)} className="product-image" style={{ height: '50vh' }} alt="product" /> */}
                                {/* <Magnifier
                                    className="producto-info-imagen-dimensiones"
                                    imageSrc={this.getPhoto(id)}
                                    imageAlt="Example"
                                    largeImageSrc={this.getPhoto(id)} // Optional
                                /> */}
                                <SideBySideMagnifier className="producto-info-imagen-dimensiones" alwaysInPlace fillAlignTop fillAvailableSpace={true} imageSrc={this.getPhoto(id)} />
                            </div>
                        </Col>
                        <br />
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <div className="productInfo-description">
                                {/* <div>{`Producto: ${name} "${brand}"`} </div> */}
                                <div>
                                    <span>
                                        <strong>Producto: </strong>{name}
                                        <br />
                                        <strong>Marca: </strong>{brand}
                                    </span>
                                </div>
                                <Row>
                                    <Col span={12}> <div>$ {price} </div> </Col>
                                    <Col span={12}> <div>Llega en: {shippingTime} </div> </Col>
                                </Row>
                                <br />
                                <div style={{ textAlign: 'left' }}><strong>Descripción: </strong>{description}</div>
                                <br />
                                <p><Puntaje /></p>
                                {/* <WhatsApp /> */}
                                <span><GroupShare id={id} /></span>
                                <Video video={video} />
                                <Link
                                    to={{
                                        pathname: '/cart/',
                                        state: { product }
                                    }}
                                >
                                    <Button onClick={onAddToCartClicked} className="color-boton-agregar-carrito">Agregar a carrito</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

ProductInfo.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        shippingTime: PropTypes.string.isRequired,
    }),
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductInfo