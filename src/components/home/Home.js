import React from "react";

import { useDispatch } from "react-redux";
import { createNewErrorAction } from "../error-indicator/redux/errorIndicatorActions";

import Footer from "../footer";

const Home = () => {

    const dispatch = useDispatch();
    const testError = {
        error: true,
        errorMessage: "ErrorIndicator Component is work!",
        errorTitle: "TEST ERROR!"
    };

    return (
        <div>
            <div className={`w-full bg-blue-400 h-500 mb-10 flex flex-col justify-start items-start p-20`}>
                <div
                    onClick={() => dispatch(createNewErrorAction(testError))}
                    className={`
                    w-200 flex justify-center items-center cursor-pointer p-10 border hover:bg-blue-500
                    `}>
                    Test Error Button
                </div>
                Home Content1
            </div>
            <div className={`bg-red-400 h-500 mb-10`}>Home Content2</div>
            <Footer />
        </div>
    );
};

export default Home;