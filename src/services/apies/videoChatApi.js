import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getTokenForVideoChat = async (chatObj) => {
    const { username, room } = chatObj;
    return await axios({
        method: "post",
        url: `${baseUrl}/video/token`,
        data: {
            identity: username,
            room: room
        }
    })
        .then((res) => res.data.token);
};