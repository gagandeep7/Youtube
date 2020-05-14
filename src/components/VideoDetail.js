import React from 'react';
import Comment from './Comment';

const VideoDetail = ({ video }) => {
    // if no video
    if (!video) {
        return <div>Loading .. . . .</div>;
    }
    // src for player
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (


        <div>
            < div className='ui embed'>
                <iframe title='videoPlayer' src={videoSrc} />
            </div>
            <div className='ui segment'>

                <h4 className='ui header'>
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>

            </div>
            <Comment />
        </div>
    );
};

export default VideoDetail;