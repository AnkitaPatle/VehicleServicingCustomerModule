
import {newService,supervisotList,assignSupervisor} from "../../services/service"

export const NEWSERVICEREQ = "NEWSERVICEREQ";
export const GETSUPERVISORLIST = "GETSUPERVISORLIST";
export const ASSIGNSUPERVISORLIST = "ASSIGNSUPERVISORLIST";


export function newServiceReq(data){
    return dispatch =>{
        newService(data).then((response)=>{
            console.log("in serv req action ")
            if (response) {
                return dispatch({
                    type: NEWSERVICEREQ,
                    payload: response
                });
            }
        });
    }
}

export function getSupervisotList(role){
    return dispatch => {
        supervisotList(role).then((response) => {
            console.log("in serv req action ")
            if (response) {
                return dispatch({
                    type: GETSUPERVISORLIST,
                    payload: response
                });
            }

        });
    }

}

export function assignSupervisorList(data){
    return dispatch => {
        assignSupervisor(data).then((response) =>{
            console.log("resdata" ,data)
            if(response){
                return dispatch ({
                    type: ASSIGNSUPERVISORLIST,
                    payload: response
                })
            }

        })
    }

}