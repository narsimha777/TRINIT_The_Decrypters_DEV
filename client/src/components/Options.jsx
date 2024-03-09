import React, { useContext, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from "./SocketContext";
import { Link } from "react-router-dom";

function Options({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState("");
    const [calling, setCalling] = useState(false); // created for LoadingLink 

    return (
        <div className="m-2 p-1">
                <p className="text-2xl font-semibold">Spanish Literature</p>
                <div className="flex flex-row  items-center">
                    <p className="text-lg">Your ID =  {me}</p>
                    <CopyToClipboard text={me}>
                        <span className="bg-gray-900 text-white font-semibold m-1 p-2 rounded" >Copy Your ID</span>
                    </CopyToClipboard>
                </div>

                <div >
                    <p className=" text-lg">Make a Meeting</p>
                    <input placeholder="Enter ID" className="border border-black rounded m-1 p-1" label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth variant="filled" required margin="dense" /> {/**setting value of name w onchange handler Değer değiştirildiğinde geri arama tetiklenir.*/}
                    {callAccepted && !callEnded ? (
                        <Link className="bg-gray-900 text-white font-semibold p-2 rounded" onClick={leaveCall}>Leave</Link>
                    ) : (
                        <Link className="bg-gray-900 text-white font-semibold p-2 rounded" loading={calling} onClick={() => { setCalling(true); callUser(idToCall); }} > Video Call </Link>
                    )}
                </div>
            {children} {/**Notification component inside of options comp */}
        </div>
    );
}
export default Options;