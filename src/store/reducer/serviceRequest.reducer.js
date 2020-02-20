
import {SERVICEREQUEST,SEARCHUSER} from "../actions/serviceRequest.action";
import defaultLogger from "redux-logger/src";

const initialState = {
    createServicereq: "",
    searchUserByPhone:""
};
const serviceRequest =function (state = initialState,action){

    switch(action.type){
        case SERVICEREQUEST:{
            return {
                ...state,
                createServicereq :action.payload
            }
        }

        case SEARCHUSER :{
            return {
                ...state,
                searchUserByPhone:action.payload
            }
        }

        default : {
            return state
        }
    }

};

export default serviceRequest;