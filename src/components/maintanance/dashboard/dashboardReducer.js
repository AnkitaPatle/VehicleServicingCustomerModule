import * as actionTypes from "./dashboardActionType";
const maitananceDashboardReducer = (state = {}, action) => {
  switch (action.type)
  {
    case actionTypes.VEHICLE_STATUS_DETAILS:
      return Object.assign({}, state, {
        vehiclestatus: action.payload
      });
    case actionTypes.GET_VEHICLE_STATUS_DETAILS:
      return Object.assign({}, state, {
        vehicledetailslist: action.payload
      });
    case actionTypes.GET_VEHICLE_STATUS_LIST:
      return Object.assign({}, state, {
        vehicleStatlist: action.payload
      });


    default:
      return state;
  }
};
export default maitananceDashboardReducer;
