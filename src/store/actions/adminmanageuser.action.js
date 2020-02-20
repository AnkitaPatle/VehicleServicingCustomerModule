

import { adminUpdateUser } from "../../services/service";

export const MANAGEUSER = "Admin";

export function register(register) {
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
  