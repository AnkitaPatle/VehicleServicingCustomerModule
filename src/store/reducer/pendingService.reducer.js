import {PENDINGERVICEREQ} from "../actions/pendingService.action";

const initialState = {
    getpendingReqdata: "",

};

const pendingService =function(state = initialState,action){
    switch (action.type) {
        case PENDINGERVICEREQ : {
            return {
                ...state,
                getpendingReqdata: action.payload
            }
        }

        default : {
            return state
        }

    }

};

export default pendingService;