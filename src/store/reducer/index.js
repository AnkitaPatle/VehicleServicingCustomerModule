import { combineReducers } from "redux";

import login from "./login.reducer";
import register from "./register.reducer";
import contact from "./contactUs.reducer";
import customerEnquiryReducer from './../../components/admin/enquiry/enqueryReducer';
import vehicleBookingReducer from './../../components/customer/vehicle/vehicle-booking-reducer';
import supervisorDashboard from "../../components/supervisor/dashboard/dashboardReducer";
import supervisorService from "../../components/supervisor/service/serviceReducer";
import vehicleServicingDetatilsReducer from "./../../components/customer/customer-reducer";
import customerBillDetailsReducer from './../../components/admin/reports/reportsReducer';
import maitananceDashboardReducer from './../../components/maintanance/dashboard/dashboardReducer';
import maitananceServiceReducer from './../../components/maintanance/service/serviceReducer';
import vehicleCat from "./vehicleCategory.reducer";
import serviceRequest from "./serviceRequest.reducer";
import newservice from "./newService.reducer"
import pendingService from "./pendingService.reducer";

const appReducer = combineReducers({ login , register , contact, supervisorDashboard, supervisorService, vehicleBookingReducer, vehicleServicingDetatilsReducer,customerEnquiryReducer, customerBillDetailsReducer, maitananceDashboardReducer, maitananceServiceReducer ,vehicleCat,serviceRequest,newservice,pendingService});

export default appReducer;