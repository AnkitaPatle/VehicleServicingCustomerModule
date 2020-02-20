import * as actionTypes from "./dashboardActionType";
import axios from "axios";
import * as api from "../../../config";

export function getVehicalAssignedDetails(userId) {
  var headers = {
    "Content-Type": "application/json",
  };
  return async function(dispatch) {
    const res = await axios
      .get(api.API_URL + `/supervisor/api/getAllServiceRequestsbySupervisor?supervisorId=${userId}&limit=10&skip=0`, { headers });
    dispatch({
      type: actionTypes.VEHICAL_ASSIGNED_DETAILS,
      payload: res.data.data
    })
  };
}

export function getMaintananceEnggList() {
  var headers = {
    "Content-Type": "application/json",
  };
  return async function(dispatch) {
    const res = await axios
      .get(api.API_URL + `/admin/api/userbyrole?role=m_engineer`, { headers });
    dispatch({
      type: actionTypes.MAINTENANCE_ENGG_LIST,
      payload: res.data.data
    });
  };
}

export function saveAssignEng(selectedCustId, maintenanceEnggId) {
  var headers = {
    "Content-Type": "application/json",
  }; 
  return async function(dispatch) {
    const res = await axios
      .put(api.API_URL+`/admin/api/assignMaintenanceEng`, { list_of_services:selectedCustId, maintenanceEng_id:maintenanceEnggId, updated_status:"In Queue" }, { headers });
    dispatch({
      type: actionTypes.ASSINGE_ENGINEER,
      payload: res.data
    });
  };
}

// ========================================
export function vehicalServiceApproval() {
  var headers = {
    "Content-Type": "application/json",
  };
  return async function(dispatch) {
    const res = await axios
      .get(api.API_URL + `/supervisor/api/AllserviceRequests?limit=10&skip=0`, { headers });
    dispatch({
      type: actionTypes.VEHICAL_SERVICE_APPROVAL,
      payload: res.data.data
    });
  };
}

export function saveServiceStatus(serviceApprovalStatus) {
  console.log("vehicle data" , serviceApprovalStatus)
  var headers = {
    "Content-Type": "application/json",
  }; 
  return async function(dispatch) {
    const res = await axios
      .put(api.API_URL+`/supervisor/api/StatusSupervisor`, serviceApprovalStatus, { headers });
    dispatch({
      type: actionTypes.SERVICE_APPROVAL_STATUS,
      payload: res.data
    });
  };
}
