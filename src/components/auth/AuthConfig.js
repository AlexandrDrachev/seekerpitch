import authRoles from "../../services/auth/authRoles";
import Auth from "./Auth";
import Login from "./login";
import Register from "./register";

const auth_path = "/auth";

const AuthConfig = {
    role: [authRoles.user, authRoles.guest],
    path: auth_path,
    exact: false,
    component: Auth,
    routes: [
        {
            role: [authRoles.user, authRoles.guest],
            path: "/auth/login",
            exact: false,
            component: Login
        },
        {
            role: [authRoles.user, authRoles.guest],
            path: "/auth/register",
            exact: false,
            component: Register
        }
    ]
};

export default AuthConfig;