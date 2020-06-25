import React, { Component } from 'react'
import { List, Avatar } from 'antd';

class ProductsInCart extends Component {
    getPhoto(prodId) {
        return `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${prodId}.png?alt=media`
    }
    render() {
        const { products } = this.props;
        return (
            <div>
                <h3 style={{ textAlign: 'center' }}>Lista de Productos</h3>
                <List
                    style={{ marginLeft: '35%' }}
                    itemLayout="horizontal"
                    dataSource={products}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={this.getPhoto(item.id)} />}
                                title={` ${item.name} | ${item.brand}`}
                                description={`subtotal: ${item.quantity} x $${item.price} = $${item.quantity * item.price}`}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ProductsInCart