import Types from "./types";

export function set_item(item) {
  return {
    type: Types.SET_ITEM,
    payload: item,
  };
}

export function append_item_to_list(item) {
  return {
    type: Types.APPEND_ITEM_TO_LIST,
    payload: item,
  };
}

export function remove_item_from_list(id) {
  return {
    type: Types.REMOVE_ITEM_FROM_LIST,
    payload: id,
  };
}

export function set_sender_info(info) {
  return {
    type: Types.SET_SENDER_INFO,
    payload: info,
  };
}

export function set_client_info(info) {
  return {
    type: Types.SET_CLIENT_INFO,
    payload: info,
  };
}

export function set_core_info(info) {
  return {
    type: Types.SET_CORE_INFO,
    payload: info,
  };
}
