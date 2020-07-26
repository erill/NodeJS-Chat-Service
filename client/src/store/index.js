import { CHATS_FETCH_SUCCESS, CHATS_FETCH_FAILED } from "./actions";

const initialState = {
  chats: {
    data: null,
    failure: null,
  }  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_FETCH_SUCCESS:
      return { 
        chats: {
          data: [...action.payload],
          failure: false,
        } 
      };
    case CHATS_FETCH_FAILED:
      return { 
        chats: {
          data: null,
          failure: true,
        } 
      };
    default:
      return state;
  }
};

export default reducer;