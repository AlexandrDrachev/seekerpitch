

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
            const { userName, roomChanel, token } = action.payload;
            return {
                ...state,
                userName: userName,
                roomChanel: roomChanel,
                roomToken: token
            };

        default:
            return state;
    }
};