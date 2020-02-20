import * as actionTypes from "./dashboardActionType";
import axios from "axios";
import * as api from "../../../config";

export function saveVehicleStatus(vehicleStatusData) {
  console.log("vehicle data", vehicleStatusData)
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .put(api.API_URL + `/supervisor/api/StatusSupervisor`, { vehicleStatusData })
      .then(res => {
        dispatch({
          type: actionTypes.VEHICLE_STATUS_DETAILS,
          payload: res.data.data
        });
      });
  };
}

export function getVehicleDetails() {

  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/supervisor/api/AllserviceRequests?limit=10&skip=0`)
      .then(res => {

        console.log(res, "res");
        dispatch({
          type: actionTypes.GET_VEHICLE_STATUS_DETAILS,
          payload: res.data.data
        });
      });
  };
}

export function getVehicleStatList() {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(`http://localhost:3200/registerUser`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_VEHICLE_STATUS_LIST,
          payload: res.data.data
        });
      });
  };
}