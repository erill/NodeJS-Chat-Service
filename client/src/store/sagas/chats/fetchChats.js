import { call, put } from "redux-saga/effects";
import { chatsFetched, chatsFetchFailed } from "../../actions";

function* fetchChats() {
    try {
      const data = yield call(() =>
        fetch("/chats")
          .then((response) => response.json())
          .then((myJson) => myJson)
      );

      yield put(chatsFetched(data));
    } catch (e) {
      yield put(chatsFetchFailed(e.message));
    }
  }

export default fetchChats;