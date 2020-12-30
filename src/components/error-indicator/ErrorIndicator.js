import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { clearErrorStateAction } from "./redux/errorIndicatorActions";
import { ReactComponent as CrashIcon } from "../../icons/crash.svg";

const ErrorIndicator = () => {

    const dispatch = useDispatch();
    const errorState = useSelector(({errorIndicatorState}) => errorIndicatorState);
    const { errorMessage, errorTitle } = errorState;

    return (
        <div className={`w-full h-screen relative`}>
            <div
                className={`
                z-20 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center
                `}>
                <div
                    className={`
                    w-400 sm:w-300 h-300 flex flex-col justify-between items-center border-2 border-white
                    rounded pulsate-fwd p-20
                    `}>
                    <h1
                        className={`
                        w-full flex justify-center items-center font-bold text-white`}>
                        {errorTitle}
                    </h1>
                    <div className={`w-80 h-80 text-white`}>
                        <CrashIcon />
                    </div>
                    <span
                        className={`
                        w-full flex justify-center items-center text-gray-300 font-bold`}>
                        {errorMessage}
                    </span>
                    <div
                        onClick={() => dispatch(clearErrorStateAction())}
                        className={`
                        h-40 flex flex-col justify-center items-center bg-gray-300 cursor-pointer
                        text-blue-600 font-bold rounded px-20 hover:border hover:border-blue-500
                        `}>
                        CLOSE
                    </div>
                </div>
            </div>
            <div className={`absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 z-10`} />
        </div>
    );
};

export default ErrorIndicator;