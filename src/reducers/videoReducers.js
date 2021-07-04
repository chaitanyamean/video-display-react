export const videoListReducer = (state=[], action) => {
    switch(action.type) {
        case 'VIDEO_LIST':
        return  action.payload;
        case 'LIKE_VIDEO':
        return state.map((video) => {
            if(video.videoName === action.payload.videoName) {
                return {
                    ...video,
                    isLiked: true
                }
            }
            return video;
        })

        case 'UNLIKE_VIDEO':
        return state.map((video) => {
            if(video.videoName === action.payload.videoName) {
                return {
                    ...video,
                    isLiked: false
                }
            }
            return video;
        })

        default:
        return state;
    }
}