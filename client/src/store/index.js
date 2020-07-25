import { CHATS_FETCHED } from "./actions";

const reducer = (state = { chats: null }, action) => {
  switch (action.type) {
    case CHATS_FETCHED:
      return { chats: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;