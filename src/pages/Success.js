import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import imagensucces from '../assets/giphy.gif';
import { firebaseApp } from '../Firebase';

const { Content } = Layout;

export default class Success extends Component {
    render() {
        return (
            <Layout>
                <Content className="content">
                    <p className="mensaje-exito">Compra realizada con éxito {firebaseApp.auth().currentUser.displayName}</p>
                    <img src={imagensucces} alt="" />
                    <Link to={{ pathname: '/' }}>
                        {/* <a href="#"> Volver al inicio </a> */}
                        Volver al inicio
                    </Link>
                </Content>
                {/* <Link to={{ pathname: '/' }}>
                    <a href="#"> Volver al inicio </a>
                </Link> */}
            </Layout>
        )
    }
}