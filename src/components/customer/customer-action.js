import axios from "axios";
import * as actionTypes from "../customer/customer-actiontype";
import { API_URL } from "../../config";

export function getAllVehicleServicingDetatis() {
  var headers = {
    "Content-Type": "application/json",
  };
  return function(dispatch) {
    return axios
      .get(API_URL + `/supervisor/api/AllserviceRequests?limit=10&skip=0`, { headers })
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_ALL_VEHICLE_SERVICING_DETAILS,
          payload: res.data
        });
      });
  };
}

export function getTrackingData(trackingId) {    
  var headers = {
    "Content-Type": "application/json",
  };
  return function (dispatch) {
    return axios
      .get(API_URL + `/supervisor/api/serviceRequestsbytrackingID?trackingId=${trackingId}`, { headers })
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_TRACKING_DATA_BY_ID,
          payload: res.data.data
        });
      });
  };
}
