import React from 'react'
import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";

const VideoCall = () => {
    return (
        <>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </>
    )
}

export default VideoCall