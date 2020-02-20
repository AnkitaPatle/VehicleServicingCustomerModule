import * as actionTypes from "./reportsActionType";
const customerBillDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_BILL_DETAILS:
      return Object.assign({}, state, {
        custVehicleBillDetails: action.payload
      });
    // case actionTypes.REPLY_FOR_MESSAGES:
    // return Object.assign({}, state, {
    //   replyMessage: action.payload
    // });
    //   case actionTypes.GET_SEND_QUERY:
    //     return Object.assign({}, state, {
    //       querysenddata: action.payload
    //     });


    default:
      return state;
  }
};
export default customerBillDetailsReducer;
