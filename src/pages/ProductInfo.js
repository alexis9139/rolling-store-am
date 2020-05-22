import React, { Component } from 'react'
import { Layout, Row, Col, Collapse } from 'antd';
import Puntaje from '../components/Puntaje';
import { Button } from 'antd';
import { HeartTwoTone, SmileOutlined, ShareAltOutlined } from '@ant-design/icons';
import WhatsApp from '../components/ShareWhatsApp';

const { Content } = Layout;

//COLAPSABLE DESCRIPCION
const { Panel } = Collapse;
const text = (
    <p style={{ paddingLeft: 24 }}>
        Descripcion
    </p>
);

export default class ProductInfo extends Component {
    state = {
        size: 'large',
    };


    getPhoto(id) {
        let imagen = `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${id}.png?alt=media`;
        return imagen;
    }
    render() {
        const { name, brand, price, id } = this.props.product[0];
        return (
            <Layout>
                <Row justify="center" className="producto-info">
                    <Col xs={{ span: 24 }} lg={{ span: 14 }} className="producto-info-imagen">
                        <img src={this.getPhoto(id)} alt="" className="producto-info-imagen-dimensiones" />
                        {/* <p>{brand}</p> */}
                    </Col>

                    <Col xs={{ span: 24 }} lg={{ span: 10 }} className="producto-info-descripcion">
                        <p>{brand} <HeartTwoTone twoToneColor="#a0d911" /></p>
                        <p>{name}</p>
                        <p>${price}</p>
                        <Puntaje />
                        <p><ShareAltOutlined /></p>
                        <WhatsApp />
                        <p></p>
                        <Collapse bordered={false} defaultActiveKey={['0']}>
                            <Panel header="Toca para ver la descripcion del producto" key="1">
                                {text}
                            </Panel>
                        </Collapse>
                        <Button type="primary" shape="round" icon={<SmileOutlined />}>
                            Comprar
                        </Button>
                        <Button shape="round">
                            Cancelar
                        </Button>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
