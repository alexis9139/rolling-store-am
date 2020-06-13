import React, { Component } from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";


import {
    FacebookShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
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
