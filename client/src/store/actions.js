export const CHATS_FETCH_REQUESTED = "CHATS_FETCH_REQUESTED";
export const CHATS_FETCHED = "CHATS_FETCHED";
export const CHATS_FETCH_FAILED = "CHATS_FETCH_FAILED";

export const chatsRequested = () => ({ type: CHATS_FETCH_REQUESTED });
export const chatsFetched = (chats) => ({ type: CHATS_FETCHED, payload: chats });
export const chatsFetchFailed = (message) => ({ type: CHATS_FETCH_FAILED, payload: message });