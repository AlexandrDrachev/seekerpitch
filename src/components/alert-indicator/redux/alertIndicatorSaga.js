import { take, call, put, delay } from "redux-saga/effects";

import { getNewAlertMessageSaga, clearAlertMessageAction } from "./alertIndicatorActions";

export function* getNewAlertMessageWatcher() {
    while (true) {
        const { payload } = yield take("GET_NEW_ALERT_MESSAGE_ACTION");
        yield call(getNewAlertMessageWorker, payload);
    }
}

function* getNewAlertMessageWorker(newAlert) {
    console.log('newAlert: ', newAlert);
    yield put(getNewAlertMessageSaga(newAlert));
    yield delay(3000);
    yield put(clearAlertMessageAction());
}