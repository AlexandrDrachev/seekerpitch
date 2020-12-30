import React from "react";

const Spinner = () => {

    return (
        <div className={`w-full flex flex-col justify-center items-center`}>
            <div className={`font-bold text-2xl text-gray-700 ping`}>LOADING...</div>
        </div>
    );
};

export default Spinner;