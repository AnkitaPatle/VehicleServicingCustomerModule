
import {pendingService} from "../../services/service"

export const PENDINGERVICEREQ = "PENDINGSERVICEREQ";
//export const GETSUPERVISORLIST = "GETSUPERVISORLIST";



export function pendingServiceReq(data){
    return dispatch =>{
        pendingService(data).then((response)=>{
            console.log("in serv req action ")
            if (response) {
                return dispatch({
                    type: PENDINGERVICEREQ,
                    payload: response
                });
            }
        });
    }
}