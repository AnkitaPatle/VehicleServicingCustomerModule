import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import history from "./history";
import getStore from "./store/store";

import Dashboard from './components/Website/Dashboard/Dashboard';
import Register from './components/Website/Register/Register';
import LoginIn from './components/Website/Login/Login';
import ContactUs from './components/Website/ContactUs/ContactUs';
import AboutUs from './components/Website/AboutUs/AboutUs';
import vehicleStatus from './components/Website/Dashboard/vehicleStatus';
import Otp from './components/Website/Register/Otp';
import OurOffers from './components/Website/OurOffers/OurOffers';
import Pricing from './components/Website/Pricing/Pricing';
import Track from './components/Website/Dashboard/vehicleTrack';

import CustomerComponent from './components/customer/customer';
import CustomerNavbarComponent from './components/customer/customer-navbar';
import CustomerSidebarComponent from './components/customer/customer-sidebar';
// import VehicleServicingDetailsComponent from './components/customer/vehicle/vehicle-servicing-details';
import VehicleBookingComponent from './components/customer/vehicle/vehicle-booking';
import VehicleHistoryComponent from './components/customer/vehicle/vehicle-history';
import SupervisorComponent from './components/supervisor/dashboard/dashboard';
import ServiceComponent from './components/supervisor/service/service';
import MaintananceDashboard from './components/maintanance/dashboard/dashboard';
import maintananceService from './components/maintanance/service/service';
import Reports from './components/admin/reports/reports';
import Enquery from './components/admin/enquiry/enquery';
import AdminDashboard from './components/admin/Dashboard/AdminDashboard';
import AddUser from './components/admin/RegisterUser/AddUser/Adduser';
import ManageUser from './components/admin/RegisterUser/ManageUser/ManageUser' ;
import Logout from './components/logout/logout';
import VehicleTracking from './components/customer/vehicle/vehicle-tracking';
import ServiceRequest from './components/admin/service/serviceRequest' ;
import vehicleCategory from './components/admin/VehicalCategory/vehicleCategory'
import PendingService from "./components/admin/service/pendingService";
import NewService from "./components/admin/service/newService";


export default () => {

  const store = getStore();

  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/register" component={Register} />
              <Route path="/loginIn" component={LoginIn} />
              <Route path="/contactUs" component={ContactUs} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/vehicleStatus" component={vehicleStatus} />
              <Route path="/Otp/:data" component={Otp} />
              <Route path="/ourOffers" component={OurOffers} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/vehicleTrack" component={Track} />

              <Route exact path="/supervisor" component={SupervisorComponent} />
              <Route exact path="/service" component={ServiceComponent} />

              <Route exact path="/customer" component={CustomerComponent} />
              {/* <Route exact path="/customernavbar" component={CustomerNavbarComponent} />
              <Route exact path="/customersidebar" component={CustomerSidebarComponent} /> */}
              {/* <Route exact path="/vehicleServicingDetails" component={VehicleServicingDetailsComponent} /> */}
              <Route exact path="/vehicleBookingrequest" component={VehicleBookingComponent} />
              <Route exact path="/vehicleHistory" component={VehicleHistoryComponent} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/vehicleTracking" component={VehicleTracking} />

              <Route exact path="/maintanance" component={MaintananceDashboard} />
              <Route exact path="/maintananceService" component={maintananceService} />
              <Route exact path="/reports" component={Reports} />
              <Route exact path="/customerEnquery" component={Enquery} />

              <Route exact path="/manager" component={AdminDashboard} />
              <Route exact path="/adduser" component={AddUser} />
              <Route exact path="/manageruser" component={ManageUser} />

              <Route exact path="/servicerequest" component={ServiceRequest}/>
              <Route exact path="/vehicleCategory" component={vehicleCategory}/>
              <Route exact path="/pendingService" component={PendingService}/>
              <Route exact path="/newService" component={NewService}/>

            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

