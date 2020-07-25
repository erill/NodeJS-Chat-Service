import { takeEvery, all } from "redux-saga/effects";

import { CHATS_FETCH_REQUESTED } from "../actions";
import fetchChats from "../sagas/chats/fetchChats";

function* rootSaga() {
  yield all([
    takeEvery(CHATS_FETCH_REQUESTED, fetchChats),
  ]);
}

export default rootSaga;