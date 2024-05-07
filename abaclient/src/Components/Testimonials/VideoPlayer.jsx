import React, { useRef } from "react";
import "./VideoPlayer.css";
import about_video from "../../assets/video1.mp4";

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
      <video src={about_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
