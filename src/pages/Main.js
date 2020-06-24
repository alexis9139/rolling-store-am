import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
// import { firebaseApp } from '../Firebase';
// import Caro from '../components/Caro'
const { Content } = Layout;
export default class Main extends Component {

    render() {


        const { products } = this.props;
        return (
            <Layout>
                <Content className="content">
                    {/* <p> Basado en tu última visita </p>
                    <div className="products-container">
                        <Row>
                            {
                                products.map(prod => (
                                    <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                                        <ProductCard key={prod.id} product={prod} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div> */}
                    {
                        products.length === 0 ?
                            <div>Cargando...</div>
                            :
                            <>
                                {/* <Caro /> */}

                                <p> Basado en tu última visita</p>
                                <div className="products-container">
                                    <Row>
                                        {
                                            products.map(prod => (
                                                <Col xs={{ span: 24 }} lg={{ span: 8 }} key={prod.id}>
                                                    <ProductCard product={prod} />
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </>
                    }
                </Content>
            </Layout>



            // const { products } = this.props;
            // const searchProductForId = this.props.searchProductForId.bind(this);
            // return (
            //     <Layout>
            //         <Content className="content">
            //             <p> Basado en tu última visita </p>
            //             {/* <Row>
            //                 {
            //                     products.map(prod => (
            //                         <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            //                             <ProductCard key={prod.id} product={prod} />
            //                         </Col>
            //                     ))
            //                 }
            //             </Row> */}
            //             <Row gutter={[8, 8]}>
            //                 {
            //                     products.map(prod => (
            //                         <Col xs={{ span: 24 }} lg={{ span: 4 }}>
            //                             <ProductCard key={prod.id} product={prod} searchProductForId={searchProductForId} />
            //                         </Col>
            //                     ))
            //                 }
            //             </Row>
            //         </Content>
            //     </Layout>
        )
    }
}