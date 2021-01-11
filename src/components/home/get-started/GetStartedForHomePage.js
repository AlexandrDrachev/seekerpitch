import React from "react";

import { ReactComponent as CameraIcon } from "../../../icons/camera.svg";

const GetStartedForHomePage = ({ src }) => {

    return (
        <div className={`w-full flex justify-center items-center mb-100`}>
            <div className={`mr-20`}>
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
            <div className={`flex flex-col ml-20`}>
                <div className={`w-full flex justify-start text-gray-700 text-2xl font-bold tracking-widest mb-20`}>
                    GET STARTED
                </div>
                <div className={`w-full flex text-gray-600 mb-20`}>
                    With SeekerPitch you have the power to create your own <br/> future. Show companies who you are beyond
                    the resume,<br/> identify your dream job at an employee-centric company, and<br/> advocate for why yuo`re
                    a great fit in real conversations
                </div>
                <div className={`w-full flex`}>
                    <div className={`px-40 py-10 mr-20 text-sm font-bold text-gray-700 bg-dirtyGreen rounded cursor-pointer`}>
                        JOBSEEKER
                    </div>
                    <div className={`
                    px-20 py-10 text-sm font-bold text-gray-700 border-2 border-dirtyGreen rounded cursor-pointer
                    `}>
                        HIRING MANAGER
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedForHomePage;