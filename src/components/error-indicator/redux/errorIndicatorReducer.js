
export const initialErrorIndicatorState = {
  error: false,
  errorTitle: '',
  errorMessage: '',
};

export const errorIndicatorReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_NEW_ERROR_ACTION':
      return action.payload;
    case 'CLEAR_ERROR_STATE_ACTION':
      return {
        error: false,
        errorTitle: '',
        errorMessage: '',
      };
      default:
        return state;
    }
};
