import * as actionTypes from "./reportsActionType";
import axios from "axios";
import * as api from "../../../config";

export function getCustomerBillDetails(fromDate, toDate) {

  console.log(api.API_URL, fromDate, toDate, "final");
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {

    if (fromDate === undefined && toDate === undefined)
    {
      return axios
        .get(api.API_URL + `/supervisor/api/AllserviceRequests?limit=10&skip=0`)
        .then(res => {
          console.log(res, "res");
          dispatch({
            type: actionTypes.CUSTOMER_BILL_DETAILS,
            payload: res.data.data
          });
        });
    } else
    {
      return axios
        .get(api.API_URL + `/supervisor/api/AllserviceRequestsbydate?limit=10&skip=0&start=` + fromDate + `&end=` + toDate)
        .then(res => {
          console.log(res, "res");
          dispatch({
            type: actionTypes.CUSTOMER_BILL_DETAILS,
            payload: res.data.data
          });
        });

    }

  }

}

// .get(api.API_URL + `/admin/api/enquiremessage`, { fromDate: fromDate, toDate: toDate })

// export function replyMessage(messageInputs) {

//   console.log(messageInputs , "messageInputs");

//   console.log(api.API_URL , "API_URL");
//   var headers = {
//     "Content-Type": "application/json",
//     // "x-auth-token": sessionStorage.getItem("token")
//   }; 
//   return function(dispatch) {
//     return axios
//       .get(api.API_URL+`/admin/api/replymessages`)
//       .then(res => {
//         dispatch({
//           type: actionTypes.REPLY_FOR_MESSAGES,
//           payload: res.data.data
//         });
//       });
//   };
// }