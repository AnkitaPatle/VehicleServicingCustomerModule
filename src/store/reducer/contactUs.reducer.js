import { CONTACTUS } from "../actions/contactUs.action";

const initialState = {
  contactdata: ""
};

const contact = function(state = initialState, action) {
    switch (action.type) {
      case CONTACTUS: { console.log("Reducer :", action.payload)
        return {
          ...state,
          contactdata: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };

export default contact;