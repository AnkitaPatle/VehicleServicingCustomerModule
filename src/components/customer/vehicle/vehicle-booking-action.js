import axios from "axios";
import * as actionTypes from "./vehicle-booking-actiontype";
import { API_URL } from "../../../config";

export function getAllcategory() {
  var headers = {
    "Content-Type": "application/json",
  };
  return function(dispatch) {
    return axios
      .get(API_URL + `/admin/api/vehicleCategory`, { headers })
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_ALL_CATEGORY,
          payload: res.data
        });
      });
  };
}

export function vehiclebooking(vehicle) {  
  console.log("vehicle data" , vehicle);
  var headers = {
    "Content-Type": "application/json",
  };
  return function(dispatch) {
    return axios
      .post(API_URL + `/supervisor/api/createServiceRequest/`, vehicle , { headers } 
      )
      .then(res => {
        dispatch({
          type: actionTypes.VEHICLE_BOOKING_SUCCESS,
          payload: res.data
        });
      });
    // dispatch({
    //       type: actionTypes.VEHICLE_BOOKING_SUCCESS,
    //       payload: vehicle
    //     });
  };
}