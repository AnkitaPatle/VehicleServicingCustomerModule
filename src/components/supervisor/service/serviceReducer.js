import * as actionTypes from "./serviceActionType";
const supervisorService = (state = {}, action) => {
 
	//console.log(action.type, "action type", action.payload)
	switch (action.type) {
		case actionTypes.SEARCH_CUSTOMERS:
		return {
			...state,
			searchCustomers: action.payload
		};
		case actionTypes.GET_VEHICLE_CATEGORY:
		return {
			...state,
			getVehicleCategory: action.payload
		};
		case actionTypes.ADD_VEHICAL_SERVICE:
		return {
			...state,
			addVehicleStatus: action.payload
		};
		default:
		return state;
	}
};
export default supervisorService;
