import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoPlayerState, setVideoPlayerState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setVideoPlayerState(false);
    }
  };

  return (
    <div
      className={`video-player ${videoPlayerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/b6Ua_zWDH6U?autoplay=1&loop=1&playlist=b6Ua_zWDH6U&mute=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
