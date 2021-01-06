import React, { useState, useEffect } from "react";

import Video from "twilio-video";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { quitChatAction } from "../redux/videoChatActions";
import Participant from "../participant";

const Room = () => {

    const dispatch = useDispatch();
    const chat = useSelector(({ videoChatState }) => videoChatState);
    const { userName, roomChanel, roomToken } = chat;
    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const participantConnected = participant => {
            setParticipants(prevParticipants => [...prevParticipants, participant]);
        };
        const participantDisconnected = participant => {
            setParticipants(prevParticipants =>
                prevParticipants.filter(p => p !== participant)
            );
        };
        console.log(11111111);
        chat.roomToken && Video.connect(chat.roomToken, {
            name: chat.roomChanel
        }).then(room => {
            setRoom(room);
            room.on('participantConnected', participantConnected);
            room.on('participantDisconnected', participantDisconnected);
            room.participants.forEach(participantConnected);
        });
        return () => {
            setRoom(currentRoom => {
                if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                    currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                        trackPublication.track.stop();
                    });
                    currentRoom.disconnect();
                    return null;
                } else {
                    return currentRoom;
                }
            });
        };
    }, [chat.roomChanel, chat.roomToken]);

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ));

    if (!roomToken) {
        return <Redirect to="/video-chat/lobby"/>
    }

    return (
        <div className={`
        w-full flex flex-col justify-center items-center
        `}>
            <div>
                Room Component
            </div>
            <div className={`
            w-full flex justify-end items-center
            `}>
                <div
                    onClick={() => dispatch(quitChatAction())}
                    className={`bg-red-600 text-yellow-300 px-20 py-10 rounded cursor-pointer hover:bg-red-700`}>
                    Quit chat
                </div>
            </div>
            <div className={`
            w-full flex flex-col justify-start items-start
            `}>
                <div>username: {userName || "Test Name"}</div>
                <div>room: {roomChanel || "Test Room"}</div>
            </div>
            {room &&
                <Participant
                    key={room.localParticipant.sid}
                    participant={room.localParticipant}
                />}
            <h3>Remote Participants</h3>
            <div className="">{remoteParticipants}</div>
        </div>
    );
};

export default Room;