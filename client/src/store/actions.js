export const CHATS_FETCH_REQUEST = "CHATS_FETCH_REQUEST";
export const CHATS_FETCH_SUCCESS = "CHATS_FETCH_SUCCESS";
export const CHATS_FETCH_FAILED = "CHATS_FETCH_FAILED";

export const chatsFetchRequest = () => ({ type: CHATS_FETCH_REQUEST });
export const chatsFetchSuccess = (chats) => ({ type: CHATS_FETCH_SUCCESS, payload: chats });
export const chatsFetchFailed = (message) => ({ type: CHATS_FETCH_FAILED, payload: message });