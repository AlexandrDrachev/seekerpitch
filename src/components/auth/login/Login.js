import React from "react";

import { Link } from "react-router-dom";
import Footer from "../../footer";

const Login = () => {

    return (
        <div className={`w-full flex flex-col justify-center items-center`}>
            <input placeholder="username" className={`border mb-20`} />
            <input type="password" placeholder="password" className={`border mb-20`} />
            <Link to="/auth/register">
                <span className={`text-blue-500`}>register</span>
            </Link>
            <Footer />
        </div>
    );
};

export default Login;