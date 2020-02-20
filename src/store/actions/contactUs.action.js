import { contactUs } from "../../services/service";

export const CONTACTUS = "CONTACTUS";

export function contact(contact) {
  return dispatch =>
  contactUs(contact).then((response) => { console.log("In action", response)
      if (response) {
        return dispatch({
          type: CONTACTUS,
          payload: response
        });
      }
    });
}