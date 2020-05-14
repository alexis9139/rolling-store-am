import React, { Component, Fragment } from 'react';

import { Card } from 'antd';

const { Meta } = Card;

export default class ProductCard extends Component {
    render() {
        return (
            <Fragment>
                {/* <div className="product-card">
                    <div>producto: {this.props.product.name} </div>
                    <div>marca: {this.props.product.brand} </div>
                    <div>precio: {this.props.product.price} </div>
                </div> */}
                <Card
                    hoverable
                    style={{ margin: 10, padding: 2, width: 260, height: 260, border: '1px solid #f0f0f0' }}
                    cover={<img style={{ width: 255, height: 160, border: '1px solid #f0f0f0' }} src={this.props.product.img} />}
                >
                    <Meta title={this.props.product.name} description={this.props.product.brand + " | " + "$ " + this.props.product.price} />
                </Card>
            </Fragment>
        )
    }
}