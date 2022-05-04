import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const Player = () => {

  const {state: currentlyPlaying} = useLocation();
  
  return (
  <>
  <div className="playerPage">
    <video autoPlay controls className="videoPlayer">
      <source
        src={currentlyPlaying}
        type="video/mp4"
      >
      </source>
    </video>
  </div>
  {currentlyPlaying}
  </>
)
}

export default Player;
