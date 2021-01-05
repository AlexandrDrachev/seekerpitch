import { take, call, put } from "redux-saga/effects";

import { getTokenForVideoChat } from "../../../services/apies/videoChatApi";
import {getChatRoomSaga} from "./videoChatActions";

export function* getChatRoomWatcher() {
    while (true) {
        const { payload } = yield take("GET_CHAT_ROOM_ACTION");
        yield call(getChatRoomWorker, payload);
    }
}

function* getChatRoomWorker(chatObj) {
    const { username, room } = chatObj;
    const token = yield call(getTokenForVideoChat, chatObj);
    const addedUserInChat = {
        userName: username,
        roomChanel: room,
        roomToken: token
    };
    yield put(getChatRoomSaga(addedUserInChat));
}