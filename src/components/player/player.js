import React from 'react';
import './player.css';

const Player = () => {
    return (
        <div id="player">
            <iframe id="iframe" name="iframe" src="https://mixer.com/embed/player/besouroradio?muted=false"></iframe>
        </div>
    );
}

export default Player;
