import React, { Component } from 'react'
import {
    FacebookShareButton,

    TwitterShareButton,

    WhatsappShareButton,
} from "react-share";




import {
    FacebookIcon,

    TwitterIcon,

    WhatsappIcon,
} from "react-share";
export default class GroupShare extends Component {
    getId(prodId) {
        return `http://localhost:3000/product/${prodId}`
    }
    render() {
        // const { id } = this.props.product;
        const id = this.props.id;

        return (
            <span className="grupo-share">
                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={this.getId(id)}
                        title={"Mira nuestro producto: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={this.getId(id)}
                        title={"Mira nuestro producto: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={this.getId(id)}
                        title={"Mira nuestro producto: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>
            </span>
        )
    }
}
