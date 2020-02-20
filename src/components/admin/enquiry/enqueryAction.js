import * as actionTypes from "./enqueryActionType";
import axios from "axios";
import * as api from "./../../../config";

export function getMessageData() {

  console.log(api.API_URL, "API_URL");
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")

    // status: "New",
    // limit: 10,
    // skip: 0
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/admin/api/enquiremessages?status=New&limit=` + 10 + `&skip=` + 0)
      .then(res => {
        dispatch({
          type: actionTypes.CUSTOMER_MESSAGES,
          payload: res.data.data
        });
      });
  };
}

export function replyMessage(messageInputs) {

  console.log(messageInputs, "messageInputs");

  console.log(api.API_URL, "API_URL");
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .post(api.API_URL + `/admin/api/replymessage`, { message: messageInputs.message, email: messageInputs.email })
      .then(res => {

        dispatch({
          type: actionTypes.REPLY_FOR_MESSAGES,
          payload: res.data.statusMessage
        });
      });
  };
}