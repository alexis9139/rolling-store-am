import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

const videoIdA = 'Q_v3ttvCVfA';
const videoIdB = '-DX3vJiqxm4';

function Example() {
    const [videoId, setVideoId] = useState(videoIdA);
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {
        // eslint-disable-next-line
        console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);
        setPlayer(event.target);
    };

    const onPlayVideo = () => {
        player.playVideo();
    };

    const onPauseVideo = () => {
        player.pauseVideo();
    };

    const onChangeVideo = () => {
        setVideoId(videoId === videoIdA ? videoIdB : videoIdA);
    };

    const opts = {
        height: '200',
        width: '500',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
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
