import React from "react";

import { ReactComponent as CameraIcon } from "../../../icons/camera.svg";

const SeeItInAction = () => {

    return (
        <div className={`w-full bg-purple-500 flex flex-col justify-center items-center p-100`}>
            <div className={`font-bold text-white text-5xl mb-40 tracking-widest`}>
                SEE IT IN ACTION
            </div>
            <div className={`w-100 border-2 border-dirtyGreen mb-40`}/>
            <div className={`w-700 h-400 bg-white flex flex-col justify-center items-center`}>
                <div className={`w-100 h-100 text-gray-400`}>
                    <CameraIcon />
                </div>
            </div>
        </div>
    );
};

export default SeeItInAction;