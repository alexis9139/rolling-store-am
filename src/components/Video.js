import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';



function Example(props) {
    const videoIdA = props.video;
    // const videoIdB = '-DX3vJiqxm4';
    const [videoId, setVideoId] = useState(videoIdA);
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {
        // eslint-disable-next-line
        console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);
        setPlayer(event.target);
    };

    // const onPlayVideo = () => {
    //     player.playVideo();
    // };

    // const onPauseVideo = () => {
    //     player.pauseVideo();
    // };

    // const onChangeVideo = () => {
    //     setVideoId(videoId === videoIdA ? videoIdB : videoIdA);
    // };

    const opts = {
        height: '200',
        width: '460',
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
