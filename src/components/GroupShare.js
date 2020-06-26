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
    getId() {
        // return `https://rolling-store-am.netlify.app/product/${prodId}`
        return `https://rolling-store-am.netlify.app`
    }
    render() {
        const id = this.props.id;
        return (
            <span className="grupo-share">
                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={this.getId()}
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
                        url={this.getId()}
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
                        url={this.getId()}
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
