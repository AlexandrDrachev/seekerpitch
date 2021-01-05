import authRoles from "../../services/auth/authRoles";

import VideoChat from "./VideoChat";
import Room from "./room";
import Lobby from "./lobby";
import Participant from "./participant";

const videoChat_path = "/video-chat";

const VideoChatConfig = {
    role: [authRoles.user, authRoles.guest],
    path: videoChat_path,
    exact: false,
    component: VideoChat,
    routes: [
        {
            role: [authRoles.user, authRoles.guest],
            path: "/video-chat/room",
            exact: false,
            component: Room
        },
        {
            role: [authRoles.user, authRoles.guest],
            path: "/video-chat/lobby",
            exact: false,
            component: Lobby
        },
        {
            role: [authRoles.user, authRoles.guest],
            path: "/video-chat/participant",
            exact: false,
            component: Participant
        }
    ]
};

export default VideoChatConfig;