import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import VideoChatConfig from "./VideoChatConfig";

const VideoChat = () => {

    const { routes } = VideoChatConfig;

    return (
        <div>
            <div>
                VideoChat Component
            </div>
            <div className={`flex`}>
                <Link to="/video-chat/room" className={`mx-20 cursor-pointer`}>Room</Link>
                <Link to="/video-chat/lobby" className={`mx-20 cursor-pointer`}>Lobby</Link>
                <Link to="/video-chat/participant" className={`mx-20 cursor-pointer`}>Participant</Link>
            </div>
            <Switch>
                {routes.map((route, idx) => {
                    const { path, role, exact, component } = route;
                    return <Route key={idx} exact={exact} path={path} role={role} component={component} />
                })}
            </Switch>
        </div>
    );
};

export default VideoChat;