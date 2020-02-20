import * as actionTypes from './vehicle-booking-actiontype';

const vehicleBookingReducer = (state = {}, action) => {
    console.log("action", action)
    switch (action.type) {
        case actionTypes.VEHICLE_BOOKING_SUCCESS:
            return {
                ...state,
                vehicleBooking: action.payload
            }
        case actionTypes.FETCH_ALL_CATEGORY:
            return {
                ...state,
                allCategory: action.payload
            };
        default:
            return state;
    }
};
export default vehicleBookingReducer;