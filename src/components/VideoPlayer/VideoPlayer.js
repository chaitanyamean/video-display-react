import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { Card } from 'react-bootstrap';

const VideoPlayer = ({videos}) => {
    
    return (
        <div className='video-cls'>
            {videos && videos.map((video, key) => {
                return (
                    <div key={key} className='video-card'>
                        <Card className="card-cls">
                            <ReactPlayer controls
                                className='video-container'
                                url={video.videoLink} />
                        </Card>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default VideoPlayer;