import { onLogin } from "../../services/service";

export const LOGIN = "LOGIN";
export function login(login) {
  return dispatch =>
    onLogin(login).then((response) => { console.log("In action ", response)
      if (response) {
        return dispatch({
          type: LOGIN,
          payload: response
        });
      }
    });
}