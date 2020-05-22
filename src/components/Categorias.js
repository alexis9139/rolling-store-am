import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
export default class Categorias extends Component {
    render() {
        return (
            <Layout>
                <Row justify="center">
                    <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                        1
                    </Col>
                    <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                        2
                    </Col>
                    <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                        3
                    </Col>
                    <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                        4
                    </Col>
                </Row>
            </Layout>
        )
    }
}
