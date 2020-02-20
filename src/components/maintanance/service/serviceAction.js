import * as actionTypes from "./serviceActionType";
import axios from "axios";
import * as api from "../../../config";

export function saveVehicleBillStatus(vehicleServiceData) {
  console.log("tracking id", vehicleServiceData)
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .post(api.API_URL + `/maintenance/api/billingpdf`, { vehicleServiceData })
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_VEHICLE_STATUS,
          payload: "Bill generated successfully.....!"
        });
      });
  };
}

export function getRoutinServiceList() {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/maintenance/api/BikeName`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_ROUTINESERVICE_LIST,
          payload: res.data.data
        });
      });
  };
}
export function getLabourChargeList() {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/maintenance/api/ServiceName`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_LABOURCHARGE_LIST,
          payload: res.data.data
        });
      });
  };
}
export function getSparpartList() {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(`http://localhost:3200/registerUser`)
      .then(res => {
        dispatch({
          type: actionTypes.GET_SPAREPARTS_LIST,
          payload: res.data.data
        });
      });
  };
}

export function getRoutinServiceChargeList(vehicleID) {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/maintenance/api/BikeServiceCharge?service=` + vehicleID.serviceDetails + `&bike=` + vehicleID.bikeDetails)
      .then(res => {
        dispatch({
          type: actionTypes.GET_ROUTINESERVICE_PRICE_LIST,
          payload: res.data.data
        });
      });
  };
}

export function getRoutinLabourChargeList(vehicleID) {
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  };
  return function (dispatch) {
    return axios
      .get(api.API_URL + `/maintenance/api/BikeServiceCharge?service=` + vehicleID.serviceDetails + `&bike=` + vehicleID.bikeDetails)
      .then(res => {
        dispatch({
          type: actionTypes.GET_LABOURCHARGES_PRICE_LIST,
          payload: res.data.data
        });
      });
  };
}