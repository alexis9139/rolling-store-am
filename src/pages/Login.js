// import React, { Component } from 'react'
// import { Form, Input, Button, Card, Layout } from 'antd';
// import { Link } from 'react-router-dom'
// import FacebookLogin from "react-facebook-login";

// const { Content, Header, Footer } = Layout;

// export class Login extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             google: {},
//             facebook: {}
//         }
//     }
//     responseFacebook = response => {
//         console.log(response);
//         // const { facebook } = this.state;
//         this.setState({
//             facebook: {
//                 isLoggedIn: true,
//                 // userID: response.userID,
//                 name: response.name,
//                 // email: response.email,
//                 picture: response.picture.data.url
//             }
//         })
//         console.log(response);
//         console.log("ESTO ES TU OBJETO FACEBOOK: " + this.state.facebook.name);
//         this.props.setUserFacebook(this.state.facebook)
//         this.props.setIsLogin();
//     };


//     componentClicked = () => console.log("clicked");


//     render() {
//         // var React = require('react');
//         var QRCode = require('qrcode.react');
//         return (
//             <Layout>
//                 <Header className='header'></Header>
//                 <Content className="content-login">
//                     {/* <p></p> */}
//                     <Card style={{ width: '50%' }}>
//                         <Form
//                             name="basic"
//                             initialValues={{
//                                 remember: true,
//                             }}>
//                             <Form.Item
//                                 label="Username"
//                                 name="username"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your username!',
//                                     },
//                                 ]}>
//                                 <Input />
//                             </Form.Item>
//                             <Form.Item
//                                 label="Password"
//                                 name="password"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your password!',
//                                     },
//                                 ]}>
//                                 <Input.Password />
//                             </Form.Item>


//                             <FacebookLogin
//                                 appId="309693926864688"
//                                 autoLoad={true}
//                                 fields="name,email,picture"
//                                 onClick={this.componentClicked}
//                                 callback={this.responseFacebook}
//                             />
//                             <Form.Item>
//                                 <Link to={{ pathname: '/' }}>
//                                     <Button type="danger" htmlType="submit" onClick={this.props.setVisible}>
//                                         Iniciar
//                                     </Button>
//                                 </Link>

//                             </Form.Item>
//                         </Form>
//                         <QRCode value="https://rolling-store-am.netlify.app/" />
//                     </Card>
//                 </Content>
//                 <Footer className="footer"></Footer>
//             </Layout>
//         );
//     }
// }

// export default Login