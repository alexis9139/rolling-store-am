import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import WhatsApp from '../components/ShareWhatsApp';
import Video from '../components/Video';
import { HeartTwoTone, SmileOutlined, ShareAltOutlined } from '@ant-design/icons';
import Puntaje from '../components/Puntaje';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom
} from "react-image-magnifiers";


export default class ProductInfo extends Component {
    getPhoto(prodId) {
        return `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${prodId}.png?alt=media`
    }

    render() {
        const { name, brand, price, id, description, shippingTime, video } = this.props.product;
        const { product } = this.props;

        return (
            <Fragment>
                <div className="productInfo">
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <div className="productInfo-imageContainer">
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
                                <div>{`producto: ${name} "${brand}"`} </div>
                                <Row>
                                    <Col span={12}> <div>precio: {price} </div> </Col>
                                    <Col span={12}> <div>llega en: {shippingTime} </div> </Col>
                                </Row>
                                <br />
                                <div style={{ textAlign: 'left' }}>descripción: {description}</div>
                                <br />
                                <p><Puntaje /> - <HeartTwoTone twoToneColor="#a0d911" /></p>
                                <WhatsApp />
                                <Video video={video} />
                                <Link
                                    to={{
                                        pathname: '/cart/',
                                        state: { product }
                                    }}
                                >
                                    <Button>Comprar</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}