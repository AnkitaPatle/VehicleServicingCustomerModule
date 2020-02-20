import {serviceRequest, searchUserbyPhone} from  "../../services/service";

export const SERVICEREQUEST = "SERVICEREQUEST";
export const SEARCHUSER = "SEARCHUSER";


export function serviceReq(request) {
    return dispatch =>
        serviceRequest(request).then((response) => {
            console.log("in serv req action ")
            if (response) {
                return dispatch({
                    type: SERVICEREQUEST,
                    payload: response
                });
            }

        });
}

export function searchUser(request) {
    return dispatch =>
        searchUserbyPhone(request).then((response) => {
            if (response) {
                return dispatch({
                    type: SEARCHUSER,
                    payload: response
                });
            }

        });

}


