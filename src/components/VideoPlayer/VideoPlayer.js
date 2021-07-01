import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { Card } from 'react-bootstrap';

import { videoList, likeVideo } from '../../actions/videoListActions';

const VideoPlayer = () => {
    const dispatch = useDispatch()

    const videos = useSelector(state => state.videoList)


    useEffect(() => {
        dispatch(videoList())
    }, [dispatch])

    const handleClick = (item, type) => {
        dispatch(likeVideo(item, type))
    }

    return (
        <div className='video-cls'>
            {videos && videos.map((video, key) => {
                return (
                    <div key={key} className= 'video-card'>
                    <Card  className = "card-cls" style={{ width: '42rem' }}>
                        <ReactPlayer controls
                        className='video-container'
                         url={video.videoLink}/>
                        <Card.Body>
                            <Card.Title>{video.videoName}</Card.Title>
                            {
                                video.isLiked === true ? 
                                <Card.Link  className="unlike-cls" onClick={() => handleClick(video, 'UNLIKE_VIDEO')}>Liked</Card.Link> : 
                                <Card.Link className="like-cls" onClick={() => handleClick(video, 'LIKE_VIDEO')}>Like</Card.Link>
                            }
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default VideoPlayer;