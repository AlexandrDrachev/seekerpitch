import { all } from "redux-saga/effects";

import { getNewAlertMessageWatcher } from "../components/alert-indicator/redux/alertIndicatorSaga";

export function* rootSaga() {
    yield all([
        testRootSaga(),
        getNewAlertMessageWatcher()
    ]);
}

function* testRootSaga() {
    yield console.log("rootSaga is ready!");
}