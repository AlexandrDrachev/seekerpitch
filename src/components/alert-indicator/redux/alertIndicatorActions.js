
export const getNewAlertMessageAction = (alertObj) => {
  return {
    type: 'GET_NEW_ALERT_MESSAGE_ACTION',
    payload: alertObj,
  };
};

export const getNewAlertMessageSaga = (alertObj) => {
  return {
    type: 'GET_NEW_ALERT_MESSAGE_SAGA',
    payload: alertObj,
  };
};

export const clearAlertMessageAction = () => {
  return {
    type: 'CLEAR_ALERT_MESSAGE_ACTION',
  };
};
