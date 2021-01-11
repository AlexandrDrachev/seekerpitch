import React from "react";

import { ReactComponent as CameraIcon } from "../../../icons/camera.svg";

const HowItWorksItem = ({ src, title, text }) => {

    return (
        <div className={`flex flex-col justify-center items-center`}>
            {
                src ?
                    <div className={`w-full flex flex-col justify-center items-center mb-20`}>
                        <img src={src} />
                    </div> :
                    <div className={`w-full flex flex-col justify-center items-center my-20`}>
                        <div className={`w-100 h-100 text-gray-400`}>
                            <CameraIcon />
                        </div>
                    </div>
            }
            <div className={`w-full flex justify-start text-gray-700 text-2xl font-bold tracking-widest mb-20`}>
                {title}
            </div>
            <div className={`w-full flex justify-start text-gray-600`}>
                <div className={`w-2/3`}>
                    {text}
                </div>
            </div>
        </div>
    );
};

const HowItWorksForHomePage = () => {

    const itemCards = [
        {
            src: null,
            title: "SHOWCASE YOURSELF",
            text: "Create a profile that promotes who are and what you are capable of."
        },
        {
            src: null,
            title: "HAVE A CONVERSATION",
            text: "Jump into a virtual interview with a hiring manager to see firsthand if you're a good fit."
        },
        {
            src: null,
            title: "APPLY SWIFTLY",
            text: "Apply to jobs with your entire profile, at a companies that value their employees."
        }
    ];

    return (
        <div className={`w-full flex flex-col justify-center items-center mb-100`}>
            <div className={`w-full flex justify-center items-center text-gray-700 text-5xl font-bold tracking-widest mb-20`}>
                HOW IT WORKS
            </div>
            <div className={`w-full flex justify-between items-start`}>
                {itemCards.map((card, idx) => {
                    return (
                        <div key={idx} className={`w-full mx-10`}>
                            <HowItWorksItem src={card.src} title={card.title} text={card.text} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HowItWorksForHomePage;