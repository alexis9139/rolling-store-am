import React from 'react';
import img1 from '../assets/img/imagen1.png';
import img2 from '../assets/img/imagen2.png';
import img3 from '../assets/img/imagen3.png';
import { Carousel } from 'antd';


class Carro extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img className="img-carro" src={img1} />
                    </div>
                    <div>
                        <img className="img-carro" src={img2} />
                    </div>
                    <div>
                        <img className="img-carro" src={img3} />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Carro