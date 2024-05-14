import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoPlayerState, setVideoPlayerState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setVideoPlayerState(false);
    }
  };

  const autoplay = videoPlayerState ? 1 : 0;
  const loop = 1;
  const playlist = "b6Ua_zWDH6U";
  const mute = 0;

  return (
    <div
      className={`video-player zoomin-element ${
        videoPlayerState ? "" : "hide"
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${playlist}?autoplay=${autoplay}&loop=${loop}&playlist=${playlist}&mute=${mute}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
