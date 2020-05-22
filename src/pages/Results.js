import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
const { Content } = Layout;

export default class Results extends Component {
    render() {
        const { results } = this.props;
        const searchProductForId = this.props.searchProductForId.bind(this)
        return (
            <Layout>
                <Content className="content">
                    <p> Resultados la de busqueda </p>
                    <Row>
                        {
                            results.map(resul => (
                                <Col xs={{ span: 12 }} lg={{ span: 24 }}>
                                    <ProductCard key={resul.id} product={resul} searchProductForId={searchProductForId} />
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
            </Layout>
        )
    }
}