import React, { Component } from 'react'
import { Layout } from 'antd'
import ProductInfo from '../components/ProductInfo.js'
const { Content } = Layout

export default class Product extends Component {
    render() {

        const { id } = this.props.match.params
        const { product } = this.props.location.state
        console.log(this.props)

        return (
            <Layout>
                <Content className="content">
                    <p> Información del producto id: {id} </p>
                    <ProductInfo product={product} />
                </Content>
            </Layout>
        )
    }
}



// import React, { Component } from 'react';
// import { Layout, Row, Col } from 'antd';
// const { Content } = Layout;

// export default class Product extends Component {
//     render() {

//         return (
//             <Layout>
//                 <Content className="content">
//                     <p> Información del producto </p>
//                 </Content>
//             </Layout>
//         )
//     }
// }