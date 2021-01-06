

export const initialVideoChatState = {
    testVideoChat: "videoChat reducer is work!",
    loading: false,
    userName: null,
    roomChanel: null,
    roomToken: null
};

export const videoChatReducer = (state, action) => {

    switch (action.type) {

        case "GET_CHAT_ROOM_SAGA":
            const { userName, roomChanel, roomToken } = action.payload;
            return {
                ...state,
                userName: userName,
                roomChanel: roomChanel,
                roomToken: roomToken
            };

        case "QUIT_CHAT_ACTION":
            return {
                ...state,
                userName: null,
                roomChanel: null,
                roomToken: null
            };

        default:
            return state;
    }
};