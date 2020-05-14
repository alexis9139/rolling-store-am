import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Input, Row, Col } from 'antd';
import ProductCard from './ProductCard';
import { Redirect } from 'react-router-dom';
import Carros from '../common/Carousel';

//destructuramos
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateList = this.props.updateList.bind(this);
        // this.setRedirect = this.setRedirect.bind(this)
    }

    // setRedirect() {
    //     //hare un cambio de estado
    //     this.setState({ redirect: true })
    // }

    setRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/results' />
        }
    }


    handleSearch(term) {
        //hara la busqueda como el redireccionamiento
        const localTerm = term;
        let currentProducts = [];
        let newProducts = [];
        if (localTerm !== '') {
            currentProducts = this.props.products;
            newProducts = currentProducts.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = localTerm.toLowerCase();
                return lc.includes(filter);
            });
            this.props.updateList(newProducts, localTerm)
        } else {
            newProducts = this.props.products;
        }
        this.setRedirect();
    }

    handleChange(e) {
        let term = e.target.value;//aqui tengo el valor de la tecla que presiono
        //llamo a la ejecucion del updateTerm
        this.props.updateTerm(term)
    }

    render() {
        const { userName, products } = this.props
        return (
            <Layout>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            <img src={logo} className="header-logo" alt="logo" />
                        </Col>

                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">
                                {this.renderRedirect()}
                                <Search
                                    placeholder="¿Qué quieres comprar?"
                                    onSearch={() => this.handleSearch(this.props.term)}//podemos escribir y veremos lo que consolea en tiempo real
                                    onChange={this.handleChange}
                                    enterButton
                                />
                            </div>
                        </Col>

                        <Col xs={{ span: 0 }} lg={{ span: 5 }}>
                            <div className="header-greetings">
                                Bienvenido  {userName}
                            </div>
                        </Col>
                    </Row>
                </Header>
                {/* Implementacion del carousel */}
                <Carros></Carros>

                <Content className="content">
                    <p>Basado en tu ultima visita</p>
                    <Row>
                        {
                            products.map(prod => (
                                <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                                    <ProductCard product={prod} />
                                </Col>
                            )
                            )
                        }
                    </Row>
                </Content>
                <Footer className="footer">
                    2020 VentaYA. All Rights Reserved
                </Footer>
            </Layout>

        );
    }
}