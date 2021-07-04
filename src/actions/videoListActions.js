
import {videoData} from '../Data/day1'


export const videoList = () => async (dispatch) => {

    dispatch({type: 'VIDEO_LIST', payload: videoData})
}

export const likeVideo = (video, type) => async (dispatch) => {
    console.log(video)
    dispatch({type: type, payload: video})
}