import {NEWSERVICEREQ, GETSUPERVISORLIST, ASSIGNSUPERVISORLIST} from "../actions/newService.action";

const initialState = {
    getnewReqdata: "",
    getsupervisordata: "",
    assignsupervisor : ""
};

const newservice =function(state = initialState,action){
    switch (action.type) {
        case NEWSERVICEREQ : {
            return {
                ...state,
                getnewReqdata: action.payload
            }
        }
        case GETSUPERVISORLIST : {
            return {
                ...state,
                getsupervisordata:action.payload
            }
        }

        case ASSIGNSUPERVISORLIST :{
            return {
                ...state,
                assignsupervisor : action.payload
            }
        }

        default : {
            return state
        }

    }

};

export default newservice;