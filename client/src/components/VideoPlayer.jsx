import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";


// creating video iframe and putting the stream inside
function VideoPlayer() {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext); // get data from context

    return (
        <div className="flex flex-row w-full"> {/** add css style with sx prop*/}

                {stream && (
                    <video className="md:w-1/2 w-full border border-black rounded" playsInline muted ref={myVideo} autoPlay />
                )}
                {callAccepted && !callEnded && (
                    <video className="md:w-1/2 w-full border border-black rounded" playsInline ref={userVideo} autoPlay /> 
                )}
        </div>
    );
};
export default VideoPlayer;