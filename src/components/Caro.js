import React from 'react';
import { Carousel } from 'antd';
import imagen1 from '../assets/img/imagen1.png'
import imagen2 from '../assets/img/imagen2.png'
import imagen3 from '../assets/img/imagen3.png'

function Caro() {
    return (
        <Carousel autoplay>
            <div>
                <img src={imagen1} className="imagen-carousel" />
            </div>
            <div>
                <img src={imagen2} className="imagen-carousel" />
            </div>
            <div>
                <img src={imagen3} className="imagen-carousel" />
            </div>
        </Carousel>
    )
}

export default Caro