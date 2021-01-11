import React from "react";

import { ReactComponent as CameraIcon } from "../../../icons/camera.svg";

const OurMissionForHomePage = () => {

    const src = null;

    return (
        <div className={`w-full flex justify-center items-center mb-100`}>
            <div className={`flex flex-col px-50 justify-center items-start mr-20`}>
                <div className={`w-full flex justify-start text-gray-700 text-2xl font-bold tracking-widest mb-20`}>
                    OUR MISSION
                </div>
                <div className={`w-full flex text-gray-600 mb-20`}>
                    Talented jobseekers are too often overlooked<br/> there are too many hoops to jump through<br/>
                    just to get noticed by the right people
                </div>
                <div className={`w-full flex text-gray-600 mb-20`}>
                    SeekerPitch is on a mission to create quick, authentic, and<br/> transparent connections
                    between operations jobseekers and<br/> hiring managers
                </div>
                <div className={`px-40 py-10 mr-20 text-sm font-bold text-gray-700 bg-dirtyGreen rounded cursor-pointer`}>
                    OUR STORY
                </div>
            </div>
            <div className={`ml-20`}>
                {
                    src ?
                        <div className={`w-full`}>
                            <img src={src} alt="" />
                        </div> :
                        <div className={`w-full flex flex-col justify-center items-center`}>
                            <div className={`w-100 h-100 text-gray-400`}>
                                <CameraIcon />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default OurMissionForHomePage;