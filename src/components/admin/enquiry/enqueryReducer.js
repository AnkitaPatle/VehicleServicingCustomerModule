import * as actionTypes from "./enqueryActionType";
const customerEnquiryReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_MESSAGES:
      return Object.assign({}, state, {
        messageData: action.payload
      });
    case actionTypes.REPLY_FOR_MESSAGES:
      return Object.assign({}, state, {
        replyMessage: action.payload
      });
    //   case actionTypes.GET_SEND_QUERY:
    //     return Object.assign({}, state, {
    //       querysenddata: action.payload
    //     });


    default:
      return state;
  }
};
export default customerEnquiryReducer;
