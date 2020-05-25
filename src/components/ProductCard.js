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
                <div className="product-card">
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
                    </div>
                    <Link to={{
                        pathname: '/product/' + id,
                        state: {
                            product: this.props.product
                        }
                    }}
                    >
                        <div>producto: {name} </div>
                        <div>marca: {brand} </div>
                        <div>precio: {price} </div>
                    </Link>
                </div>
            </div>

        )
    }
}






// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

// export default class ProductCard extends Component {
//     getPhoto(prodId) {
//         return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
//     }

//     render() {
//         const { name, brand, price, id } = this.props.product;

//         return (
//             <Link to={{
//                 pathname: '/product/' + id,
//                 state: {
//                     product: this.props.product
//                 }
//             }}
//             >
//                 <div style={{ cursor: 'pointer', margin: 20 }}>
//                     <div className="product-card">
//                         <div className="product-imageContainer">
//                             <img src={this.getPhoto(id)} className="product-image" alt="product" />
//                         </div>
//                         <div>producto: {name} </div>
//                         <div>marca: {brand} </div>
//                         <div>precio: {price} </div>
//                     </div>
//                 </div>
//             </Link>
//         )
//     }
// }






// // import React, { Component, Fragment } from 'react';
// // import { Card } from 'antd';
// // import ModalImage from "react-modal-image";
// // import { QuestionOutlined } from '@ant-design/icons';
// // import { Redirect } from 'react-router-dom'

// // export default class ProductCard extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             redirectToProductInfo: false
// //         }
// //         this.searchProductForId = this.props.searchProductForId.bind(this);
// //     }

// //     renderRedirectToProductInfo = (id) => {
// //         if (this.state.redirectToProductInfo) {
// //             return <Redirect to={`/products/${id}`} />
// //         }
// //     }

// //     setRedirectInfoToProduct = (id) => {
// //         this.setState({
// //             redirectToProductInfo: true
// //         })
// //         this.props.searchProductForId(id);
// //     }

// //     getPhoto(id) {
// //         let imagen = `https://firebasestorage.googleapis.com/v0/b/rolling-store-am.appspot.com/o/products%2F${id}.png?alt=media`;
// //         return imagen;
// //     }

// //     render() {
// //         const { name, brand, price, id } = this.props.product;
// //         return (
// //             <Fragment>
// //                 {this.renderRedirectToProductInfo(id)}
// //                 <div
// //                     className="product-card"
// //                 >
                    //  <ModalImage className="imagen-alto"
                    //      // small={this.props.product.img}
                    //      // large={this.props.product.img}
                    //      small={this.getPhoto(id)}
                    //      large={this.getPhoto(id)}
                    //      hideDownload={true}
                    //      hideZoom={true}
                    //      showRotate={true}
                    //      alt=""
                    //  />
// //                     <div
// //                         className="descripcion-producto"
// //                         onClick={() => this.setRedirectInfoToProduct(id)}>
// //                         <div>Producto: {name} </div>
// //                         <div>Marca: {brand} </div>
// //                         <div>$ {price}</div>
// //                     </div>
// //                 </div>
// //             </Fragment>
// //         )
// //     }
// // }