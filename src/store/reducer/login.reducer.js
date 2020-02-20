import { LOGIN } from "../actions/login.actions";

const initialState = {
  logindata: ""
};

const login = function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: { console.log("action :", action.payload)
      return {
        ...state,
        logindata: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default login;