import { registerUser } from "../../services/service";
import { otpVerify } from "../../services/service";
import { adminRegisterUser } from "../../services/service";
import { adminUpdateUser } from "../../services/service";



export const REGISTER = "REGISTER";
export const ADMINREGISTER = "Admin";
export const MANAGEUSER = "AdminManage";
export const OTP = "OTP";
export const FORGOTOTP="FORGOTOTP";


export function register(register) {
  return dispatch =>
  registerUser(register).then((response) => { console.log("In action ", response)
      if (response) { 
        return dispatch({
          type: REGISTER,
          payload: response
        });
      }
    });
}

export function otp(otp) {
  return dispatch =>
  otpVerify(otp).then((response) => { console.log("In action ", response)
      if (response) {
        return dispatch({
          type: OTP,
          payload: response
        });
      }
    });
}



export function adminRegister(register) {
  return dispatch =>
  adminRegisterUser(register).then((response) => { console.log("In action ", response)
      if (response) { debugger;
        return dispatch({
          type: ADMINREGISTER,
          payload: response
        });
      }
    });
}

export function adminManageUser(register) {
  return dispatch =>
  adminUpdateUser(register).then((response) => { console.log("In action ", response)
      if (response) { debugger;
        return dispatch({
          type: MANAGEUSER,
          payload: response
        });
      }
    });
}
