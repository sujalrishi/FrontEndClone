import React from 'react';
import Footer from './Footer';
import "./Video.css"

function Video() {
    return (
        <div className="video">
            <video className="video_player" 
            src=""></video>
            <Footer />
        </div>
    )
}

export default Video
