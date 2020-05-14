import React from "react";
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div className=' video-item item'
            // callback to videolist then to App
            onClick={() => onVideoSelect(video)}>

            <img className='ui image' alt="thumbnail video" src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'> {video.snippet.title} </div>
            </div>
        </div>
    );




};

export default VideoItem;