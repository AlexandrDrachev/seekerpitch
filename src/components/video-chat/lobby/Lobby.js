import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {getChatRoomAction} from "../redux/videoChatActions";

const Lobby = () => {

    const dispatch = useDispatch();
    const chat = useSelector(({ videoChatState }) => videoChatState);
    const { roomToken } = chat;
    const [chatRoom, setChatRoom] = useState({
        username: "Test Name",
        room: "Test Room"
    });

    const onChangeChatRoom = (event, field) => {
        return setChatRoom({
            ...chatRoom,
            [field]: event.target.value
        });
    };

    if (roomToken) {
        return <Redirect to="/video-chat/room" />
    }

    return (
        <div className={`w-full flex flex-col justify-center items-center`}>
            <div className={`w-full flex flex-col justify-center items-center`}>
                <div className={`mb-20`}>Lobby Component</div>
                <input
                    onChange={(e) => onChangeChatRoom(e, "username")}
                    value={chatRoom.username}
                    placeholder="username"
                    className={`mb-20 px-10 py-5 border rounded focus:outline-none`} />
                <input
                    onChange={(e) => onChangeChatRoom(e, "room")}
                    value={chatRoom.room}
                    placeholder="room"
                    className={`mb-20 px-10 py-5 border rounded focus:outline-none`} />
                <div
                    onClick={() => dispatch(getChatRoomAction(chatRoom))}
                    className={`
                    flex flex-col justify-center items-center px-20 py-10 rounded bg-green-600 text-yellow-300 font-bold 
                    cursor-pointer hover:bg-green-500
                    `}>
                    Create room
                </div>
            </div>
        </div>
    );
};

export default Lobby;