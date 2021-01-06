

export const getChatRoomAction = (chatObj) => {
    return {
        type: "GET_CHAT_ROOM_ACTION",
        payload: chatObj
    };
};

export const getChatRoomSaga = (chatObj) => {
    return {
        type: "GET_CHAT_ROOM_SAGA",
        payload: chatObj
    };
};

export const quitChatAction = () => {
    return {
        type: "QUIT_CHAT_ACTION"
    };
};