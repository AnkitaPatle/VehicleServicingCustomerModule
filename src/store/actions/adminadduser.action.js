import { adminRegisterUser } from "../../services/service";

export const REGISTER = "Admin";

export function register(register) {
  return dispatch =>
  adminRegisterUser(register).then((response) => { console.log("In action ", response)
      if (response) { debugger;
        return dispatch({
          type: REGISTER,
          payload: response
        });
      }
    });
}

