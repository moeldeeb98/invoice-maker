import {
  set_item,
  append_item_to_list,
  remove_item_from_list,
  set_sender_info,
  set_client_info,
  set_core_info,
} from "./actions";

export function dispatchSetItem(item) {
  return (dispatch) => {
    dispatch(set_item(item));
  };
}

export function dispatchAppendItemToList(item) {
  return (dispatch) => {
    dispatch(append_item_to_list(item));
  };
}

export function dispatchRemoveItemFromList(id) {
  return (dispatch) => {
    dispatch(remove_item_from_list(id));
  };
}

export function dispatchSenderInfo(info) {
  return (dispatch) => {
    dispatch(set_sender_info(info));
  };
}

export function dispatchClientInfo(info) {
  return (dispatch) => {
    dispatch(set_client_info(info));
  };
}

export function dispatchCoreInfo(info) {
  return (dispatch) => {
    dispatch(set_core_info(info));
  };
}
