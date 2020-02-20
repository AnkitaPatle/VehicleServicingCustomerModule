import * as actionTypes from "./serviceActionType";
const maitananceServiceReducer = (state = {}, action) => {
  switch (action.type)
  {
    case actionTypes.UPDATE_VEHICLE_STATUS:
      return Object.assign({}, state, {
        savevehiclebill: action.payload
      });
    case actionTypes.GET_ROUTINESERVICE_LIST:
      return Object.assign({}, state, {
        routineservicelist: action.payload
      });
    case actionTypes.GET_LABOURCHARGE_LIST:
      return Object.assign({}, state, {
        labourchargelist: action.payload
      });
    case actionTypes.GET_SPAREPARTS_LIST:
      return Object.assign({}, state, {
        sparepartlist: action.payload
      });
    case actionTypes.GET_ROUTINESERVICE_PRICE_LIST:
      return Object.assign({}, state, {
        routineservicePricelist: action.payload
      });
    case actionTypes.GET_LABOURCHARGES_PRICE_LIST:
      return Object.assign({}, state, {
        labourchargesPricelist: action.payload
      });


    default:
      return state;
  }
};
export default maitananceServiceReducer;
