

export const createNewErrorAction = (errorObj) => {
    return {
        type: "CREATE_NEW_ERROR_ACTION",
        payload: errorObj
    };
};

export const clearErrorStateAction = () => {
    return {
        type: "CLEAR_ERROR_STATE_ACTION"
    };
};