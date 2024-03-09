import React, { useContext, useEffect} from "react";
// import { Button,Alert} from "@mui/material";
import { SocketContext } from "./SocketContext";
// import ringtoneSound from "../assets/hang.mp3";

function Notifications() { 
    const {answerCall, call, callAccepted, declineCall } = useContext(SocketContext);

    // useEffect(() => {
    //     if (call.isReceivedCall && !callAccepted) {
    //         const audio = new Audio(ringtoneSound);
    //         audio.loop = true; // Loop the ringtone
    //         audio.play();
    //         return () => {
    //             audio.pause(); // Pause the ringtone when call is accepted or component unmounts
    //         };
    //     }
    // }, [call, callAccepted]);
    
    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{paddingBottom:20, display:"flex", justifyContent:"center", gap:10}}>
                    {/* <Typography gutterBottom variant="h6"align="inherit" icon={<ContactPhoneIcon fontSize="inherit" />}>{call.name} is calling... </Typography>   */}
                    <div severity="info">{call.name} is calling...</div>
                    <button variant="contained" color="primary" onClick={answerCall} >
                        Answer
                    </button> 
                    <button variant="contained" color="error" onClick={declineCall}>
                        Decline 
                    </button>
                </div>
            )}
        </>

    );

}
export default Notifications;