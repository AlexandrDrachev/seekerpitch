import { errorIndicatorReducer, initialErrorIndicatorState } from "../components/error-indicator/redux/errorIndicatorReducer";
import { homeReducer, initialHomeState } from "../components/home/redux/homeReducer";
import { howItWorksReducer, initialHowItWorksState } from "../components/how-it-works/redux/howItWorksReducer";
import { ourStoryReducer, initialOurStoryState } from "../components/our-story/redux/ourStoryReducer";
import { authReducer, initialAuthState } from "../components/auth/redux/authReducer";
import { contactUsReducer, initialContactUsState } from "../components/contact-us/redux/contactUsReducer";

const initialState = {
    errorIndicatorState: initialErrorIndicatorState,
    homeState: initialHomeState,
    howItWorksState: initialHowItWorksState,
    ourStoryState: initialOurStoryState,
    authState: initialAuthState,
    contactUsState: initialContactUsState
};

const rootReducer = (state = initialState, action) => {
    console.log('action: ', action);
    console.log('state: ', state);
    const { errorIndicatorState, homeState, howItWorksState, ourStoryState, authState, contactUsState } = initialState;
    return {
        errorIndicatorState: errorIndicatorReducer(errorIndicatorState, action),
        homeState: homeReducer(homeState, action),
        howItWorksState: howItWorksReducer(howItWorksState, action),
        ourStoryState: ourStoryReducer(ourStoryState, action),
        authState: authReducer(authState, action),
        contactUsState: contactUsReducer(contactUsState, action)
    };
};

export default rootReducer;