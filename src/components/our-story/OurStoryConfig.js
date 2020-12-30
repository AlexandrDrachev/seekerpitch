import authRoles from "../../services/auth/authRoles";
import OurStory from "./OurStory";

const ourStory_path = "/our-story";

const OurStoryConfig = {
    role: authRoles.guest,
    path: ourStory_path,
    exact: false,
    component: OurStory
};

export default OurStoryConfig;