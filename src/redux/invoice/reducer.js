import Types from "./types";

const initialState = {
  item: {},
  list: [],
  sender: {},
  client: {},
  core: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case Types.APPEND_ITEM_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case Types.REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        list: state.list.filter((row) => row.id !== action.payload),
      };
    case Types.SET_SENDER_INFO:
      return {
        ...state,
        sender: action.payload,
      };
    case Types.SET_CLIENT_INFO:
      return {
        ...state,
        client: action.payload,
      };
    case Types.SET_CORE_INFO:
      return {
        ...state,
        core: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
