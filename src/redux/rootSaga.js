import { all } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        testRootSaga()
    ]);
}

function* testRootSaga() {
    yield console.log("rootSaga is ready!");
}