import React, { Component } from 'react'
import {
    WhatsappShareButton,
} from "react-share";
import {
    WhatsappIcon,
} from "react-share";

export default class ShareWhatsApp extends Component {
    render() {
        return (
            <div>
                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={"https://www.google.com.ar/"}
                        title={"Verifica: "}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>
            </div>
        )
    }
}
