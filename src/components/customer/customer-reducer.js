import * as actionTypes from '../customer/customer-actiontype';

const vehicleServicingDetatilsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_VEHICLE_SERVICING_DETAILS:
            return {
                ...state,
                vehicleServicingDetatils: action.payload
            }    
            case actionTypes.FETCH_TRACKING_DATA_BY_ID:
            return {
                ...state,
                trackingData: action.payload
            }   
        default:
            return state;
    }
};
export default vehicleServicingDetatilsReducer;
