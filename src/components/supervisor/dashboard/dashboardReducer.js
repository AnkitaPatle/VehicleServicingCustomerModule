import * as actionTypes from "./dashboardActionType";
const supervisorDashboard = (state = {}, action) => {
 
	//console.log(action.type, "action type", action.payload)
	switch (action.type) {
		case actionTypes.VEHICAL_ASSIGNED_DETAILS:
		return {
			...state,
			vehicalAssignedData: action.payload
		};
		case actionTypes.MAINTENANCE_ENGG_LIST:
		return {
			...state,
			maintenanceEnggList: action.payload
		};
		case actionTypes.ASSINGE_ENGINEER:
		return {
			...state,
			assignedEngg: action.payload
		};
		case actionTypes.VEHICAL_SERVICE_APPROVAL:
		return {
			...state,
			vehicalServiceApproval: action.payload
		};
		case actionTypes.SERVICE_APPROVAL_STATUS:
		return {
			...state,
			serviceApprovalStatus: action.payload
		};
		default:
		return state;
	}
};
export default supervisorDashboard;