import * as actionTypes from "./serviceActionType";
import axios from "axios";
import * as api from "../../../config";

export function searchCustomers(phoneNumber) {
  var headers = {
    "Content-Type": "application/json",
  };
  return async function(dispatch) {
    const res = await axios
      .get(api.API_URL + `/admin/api/searchUser?contact_number=${phoneNumber}`, { headers });
    dispatch({
      type: actionTypes.SEARCH_CUSTOMERS,
      payload: res.data
    });
  };
}

export function getVehicleCategory() {
  var headers = {
    "Content-Type": "application/json",
  };
  return async function(dispatch) {
    const res = await axios
      .get(api.API_URL + `/admin/api/vehicleCategory`, { headers });
    dispatch({
      type: actionTypes.GET_VEHICLE_CATEGORY,
      payload: res.data.data
    });
  };
}

export function vehicleServiceRequest(vehicle) {
  console.log("vehicle data" , vehicle)
  var headers = {
    "Content-Type": "application/json",
  }; 
  return async function(dispatch) {
    const res = await axios
      .post(api.API_URL + `/supervisor/api/createServiceRequest/`, vehicle, { headers });
    dispatch({
      type: actionTypes.ADD_VEHICAL_SERVICE,
      payload: res.data
    });
  };
}