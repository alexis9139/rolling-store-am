import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';



function Example(props) {
    const videoIdA = props.video;
    const [videoId] = useState(videoIdA);
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {

        setPlayer(event.target);
        console.log(player)
    };



    const opts = {
        height: '200',
        width: '460',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
    );
}
export default Example
