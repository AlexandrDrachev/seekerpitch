import authRoles from "../../services/auth/authRoles";
import HowItWorks from "./HowItWorks";

const howItWorks_path = "/how-it-works";

const HowItWorksConfig = {
    role: authRoles.user,
    path: howItWorks_path,
    exact: false,
    component: HowItWorks
};

export default HowItWorksConfig;