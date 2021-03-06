import { all } from "redux-saga/effects";

import { getNewAlertMessageWatcher } from "../components/alert-indicator/redux/alertIndicatorSaga";
import { getChatRoomWatcher } from "../components/video-chat/redux/videoChatSaga";

export function* rootSaga() {
    yield all([
        testRootSaga(),
        getNewAlertMessageWatcher(),
        getChatRoomWatcher()
    ]);
}

function* testRootSaga() {
    yield console.log("rootSaga is ready!");
}