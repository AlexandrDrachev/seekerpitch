import React from "react";

import { ReactComponent as CameraIcon } from "../../../icons/camera.svg";

const JobssekersItem = ({ text }) => {

    return (
        <div className={`flex justify-start items-center mb-20`}>
            <div className={`
            w-30 h-30 rounded-full flex flex-col justify-center items-center border-2 border-purple-500 mr-20 text-purple-500
            `}>
                &#10004;
            </div>
            <div className={`text-gray-600`}>
                {text}
            </div>
        </div>
    );
};

const GetHiredForWhoYouAre = () => {

    return (
        <div className={`
        w-full flex flex-col justify-center items-center mb-100
        `}>
            <div className={`w-full flex justify-center items-center text-gray-700 text-5xl font-bold tracking-widest mb-20`}>
                GET HIRED WHO YOU ARE
            </div>
            <div className={`w-full flex flex-col justify-center items-center text-gray-700 mb-20`}>
                <div>
                    SeekerPitch showcases Operations jobseekers in a new light and connects them to hiring managers
                </div>
                <div>
                    to have real conversations. Remember, you're more than just a resume.
                </div>
            </div>
            <div className={`
            w-full flex justify-center items-center px-50
            `}>
                <div className={`w-50% h-full flex flex-col justify-center items-center mr-10`}>
                    <div className={`w-100 h-100 text-gray-400`}>
                        <CameraIcon />
                    </div>
                </div>
                <div className={`w-50% flex flex-col justify-center items-start ml-10`}>
                    <div className={`w-full flex flex-col items-start text-gray-700 text-3xl font-bold tracking-widest mb-20`}>
                        <div>
                            THE JOBS YOU CAN FIND ON
                        </div>
                        <div>
                            SEEKERPITCH INCLUDE:
                        </div>
                    </div>
                    <div className={`flex justify-start`}>
                        <div className={`flex flex-col mr-20`}>
                            <JobssekersItem text={`Customer Success Manager`}/>
                            <JobssekersItem text={`Project Manager`}/>
                            <JobssekersItem text={`Business Analyst`}/>
                            <JobssekersItem text={`Director of Operations`}/>
                            <JobssekersItem text={`Strategic Partnership Manager`}/>
                        </div>
                        <div className={`flex flex-col`}>
                            <JobssekersItem text={`Sales Ops Lead`}/>
                            <JobssekersItem text={`Marketing Ops Lead`}/>
                            <JobssekersItem text={`Implentation Manager`}/>
                            <JobssekersItem text={`Operations Manager`}/>
                            <JobssekersItem text={`Operations Analyst`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetHiredForWhoYouAre;