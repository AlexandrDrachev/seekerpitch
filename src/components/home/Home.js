import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createNewErrorAction } from "../error-indicator/redux/errorIndicatorActions";
import { getNewAlertMessageAction } from "../alert-indicator/redux/alertIndicatorActions";

import Footer from "../footer";
import GetHiredForWhoYouAre from "./get-hired-for-who-you-are";

import { ReactComponent as CameraIcon } from "../../icons/camera.svg";
import HowItWorksForHomePage from "./how-it-works";
import GetStartedForHomePage from "./get-started";
import OurMissionForHomePage from "./our-mission";
import SeeItInAction from "./see-it-in-action";
import OurEmployersForHomePage from "./our-employers";

const Home = () => {

    const dispatch = useDispatch();
    const testError = {
        error: true,
        errorMessage: "ErrorIndicator Component is work!",
        errorTitle: "TEST ERROR!"
    };
    const testAlertIndicator = {
        alertIndicator: true,
        alertMessage: "Alert Indicator component is work!"
    };

    return (
        <div className={`
        w-full flex flex-col justify-center items-center
        `}>
            <div className={`
            w-full flex justify-start items-center mb-20`}>
                <div
                    onClick={() => dispatch(createNewErrorAction(testError))}
                    className={`
                    flex justify-center items-center cursor-pointer p-10 border mx-10 hover:bg-dirtyBlue
                    rounded
                    `}>
                    Test Error Button
                </div>
                <div
                    onClick={() => dispatch(getNewAlertMessageAction(testAlertIndicator))}
                    className={`
                    flex justify-center items-center cursor-pointer p-10 border mx-10 hover:bg-dirtyBlue rounded
                    `}>
                    Test Alert Indicator Button
                </div>
                {/*<Link to="/video-chat/lobby" className={`m-20 cursor-pointer`}>Redirect to video-chat</Link>*/}
            </div>
            <div className={`w-full bg-dirtyBlue mb-10 flex justify-center items-center p-80 mb-100`}>
                <div className={`
                w-50% flex flex-col justify-center items-between
                `}>
                    <div className={`
                    flex flex-col justify-center items-start text-white font-bold text-6xl tracking-widest mb-40
                    `}>
                        <div>WELCOME TO THE</div>
                        <div>FUTURE OF</div>
                        <div>JOBSEEKING</div>
                    </div>
                    <div className={`
                    flex flex-col justify-start items-start text-white mb-40
                    `}>
                        <div>
                            Giving the power to the jobseeker to land a job at a company they love
                        </div>
                        <div>
                            by showcasing who they are beyond the resume.
                        </div>
                    </div>
                    <div className={`
                    flex justify-start items-center text-sm font-bold tracking-widest mb-40
                    `}>
                        <div className={`px-15 py-10 bg-dirtyGreen rounded cursor-pointer mr-15`}>JOBSEEKER SIGNUP</div>
                        <div className={`px-15 py-10 text-white border-2 border-dirtyGreen rounded cursor-pointer`}>EMPLOYER SIGNUP</div>
                    </div>
                </div>
                <div className={`
                w-50% flex flex-col justify-center items-center
                `}>
                    <div className={`
                    w-500 h-500 rounded-full border-2 border-dirtyGreen flex flex-col justify-center items-center bg-white
                    `}>
                        <div className={`w-100 h-100 text-gray-400`}>
                            <CameraIcon />
                        </div>
                    </div>
                </div>
            </div>
            <GetHiredForWhoYouAre />
            <HowItWorksForHomePage />
            <GetStartedForHomePage />
            <OurMissionForHomePage />
            <SeeItInAction />
            <OurEmployersForHomePage />
            <Footer />
        </div>
    );
};

export default Home;