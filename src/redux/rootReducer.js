import { errorIndicatorReducer, initialErrorIndicatorState } from "../components/error-indicator/redux/errorIndicatorReducer";
import { homeReducer, initialHomeState } from "../components/home/redux/homeReducer";
import { howItWorksReducer, initialHowItWorksState } from "../components/how-it-works/redux/howItWorksReducer";
import { ourStoryReducer, initialOurStoryState } from "../components/our-story/redux/ourStoryReducer";
import { authReducer, initialAuthState } from "../components/auth/redux/authReducer";
import { contactUsReducer, initialContactUsState } from "../components/contact-us/redux/contactUsReducer";
import { alertIndicatorReducer, initialAlertIndicatorState } from "../components/alert-indicator/redux/alertIndicatorReducer";
import { videoChatReducer, initialVideoChatState } from "../components/video-chat/redux/videoChatReducer";

const initialState = {
    errorIndicatorState: initialErrorIndicatorState,
    homeState: initialHomeState,
    howItWorksState: initialHowItWorksState,
    ourStoryState: initialOurStoryState,
    authState: initialAuthState,
    contactUsState: initialContactUsState,
    alertIndicatorState: initialAlertIndicatorState,
    videoChatState: initialVideoChatState
};

const rootReducer = (state = initialState, action) => {
    console.log('action: ', action);
    console.log('state: ', state);
    const {
        errorIndicatorState,
        homeState,
        howItWorksState,
        ourStoryState,
        authState,
        contactUsState,
        alertIndicatorState,
        videoChatState
    } = initialState;
    return {
        errorIndicatorState: errorIndicatorReducer(errorIndicatorState, action),
        homeState: homeReducer(homeState, action),
        howItWorksState: howItWorksReducer(howItWorksState, action),
        ourStoryState: ourStoryReducer(ourStoryState, action),
        authState: authReducer(authState, action),
        contactUsState: contactUsReducer(contactUsState, action),
        alertIndicatorState: alertIndicatorReducer(alertIndicatorState, action),
        videoChatState: videoChatReducer(videoChatState, action)
    };
};

export default rootReducer;