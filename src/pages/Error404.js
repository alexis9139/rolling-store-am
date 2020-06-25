import React, { Component } from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <Result
                    className="pagina404"
                    status="404"
                    title="404"
                    subTitle="=( La pagina no existe, comprueba que este escrita correctamente."
                    extra={<Button type="primary"><Link to={{
                        pathname: '/',
                        // state: { product }
                    }}>Regresar pagina principal</Link></Button>}
                />
            </div>
        )
    }
}
