import { REGISTER, OTP, ADMINREGISTER, MANAGEUSER, FORGOTOTP } from "../actions/register.action";
// import { REGISTER, OTP ,FORGOTOTP} from "../actions/register.action";

const initialState = {
  registerdata: "",
  otpdata: "",
  forgotOtpData:''
};

// const register = function (state = initialState, action) {
//   switch (action.type) {
//     case REGISTER: {
//       console.log("action :", action.payload)
//       return {
//         ...state,
//         registerdata: action.payload
//       };
//     }
//     case OTP: {
//       console.log("action :", action.payload)
//       return {
//         ...state,
//         otpdata: action.payload
//       };

const register = function(state = initialState, action) {
    switch (action.type) {
      case REGISTER: { console.log("action :", action.payload)
        return {
          ...state,
          registerdata: action.payload
        };
      }
      case OTP: { console.log("action :", action.payload)
        return {
          ...state,
          otpdata: action.payload
        };
      }case ADMINREGISTER: { console.log("action :", action.payload)
      return {
        ...state,
        registerdata: action.payload
      };
    } case MANAGEUSER: {
      console.log("action :", action.payload)
      return {
        ...state,
        registerdata: action.payload
      };
    }
      
      case FORGOTOTP: { console.log("action :", action.payload)
        return {
          ...state,
          forgotOtpData: action.payload
        };
      }
      default: {
        return state;
      }
    }
  }
// };


export default register;