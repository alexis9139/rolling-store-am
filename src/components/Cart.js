import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Row, Col, Input } from 'antd';
import { Redirect } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        console.log("Redireccionando")
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        const { userName, term } = this.props;
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <Row>
                            <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                                {this.renderRedirect()}
                                <img src={logo} alt="logo" className="header-logo" onClick={this.setRedirect} />
                            </Col>
                            <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                                <div className="header-search">
                                    <Search
                                        placeholder={term}
                                        onSearch={value => console.log(value)}
                                        enterButton
                                    />
                                </div>
                            </Col>
                            <Col xs={{ span: 0 }} lg={{ span: 5 }}>
                                <div className="header-greetings">Bienvenido {userName}</div>
                            </Col>
                        </Row>
                    </Header>

                    <Content className="content">
                        <p>Resultado de cart</p>
                    </Content>

                    <Footer className="footer">
                        Footer
                    </Footer>
                </Layout>
            </div>
        );
    }
}