import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Video from './Video';
export default class Caro extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return (
            <div>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    <div className="estilo-corousel"><img width='400px' height="180px" src="https://i.blogs.es/6c558d/luna-400mpx/450_1000.jpg" alt="" /></div>
                    <div className="estilo-corousel"><img width='400px' height="180px" src="https://i0.pngocean.com/files/329/770/529/high-definition-television-high-definition-video-stuart-the-minion-wallpaper-minions-png.jpg" alt="" /></div>
                    <div className="estilo-corousel"><img width='400px' height="180px" src="https://i1.pngguru.com/preview/563/258/413/recursos-texturas-cosas-black-paint-illustration-png-clipart.jpg" alt="" /></div>

                </Carousel>;
            </div>
        )
    }
}








