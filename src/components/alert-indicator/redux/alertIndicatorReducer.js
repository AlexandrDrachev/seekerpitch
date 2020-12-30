

export const initialAlertIndicatorState = {
    alertIndicator: false,
    alertMessage: ""
};

export const alertIndicatorReducer = (state, action) => {

    switch (action.type) {

        case "GET_NEW_ALERT_MESSAGE_SAGA":
            return action.payload;

        case "CLEAR_ALERT_MESSAGE_ACTION":
            return initialAlertIndicatorState;

        default:
            return state;
    }
};