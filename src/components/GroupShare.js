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

    render() {
        return (
            <span className="grupo-share">
                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={"https://www.google.com.ar/"}
                        title={"Compartir Whatsapp: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={"https://www.google.com.ar/"}
                        title={"Compartir Facebook: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={"https://www.google.com.ar/"}
                        title={"Compartir Twitter: "}
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
