import React, { Component } from 'react'
import CustomerNavbarComponent from '../customer/customer-navigation/customer-navbar';
import CustomerSidebarComponent from '../customer/customer-navigation/customer-sidebar';
import '../customer/customer-navigation/customer.css';
import { connect } from 'react-redux';
import * as actions from '../customer/customer-action';
import approved from '../../assets/images/approved.jpg'
import notApproved from '../../assets/images/notApproved.png'
import pdf from '../../assets/images/pdf.png'
import { API_URL } from './../../config';

class CustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingId : ""
        }
    }

    componentDidMount() {
        console.log('props :', this.props)
        const { dispatch } = this.props;
        dispatch(actions.getAllVehicleServicingDetatis());
    }

    onPropertyChange(e) {
        this.setState({
            trackingId : e.target.value
        })
    }

    getTrackingData = () => {
        const { dispatch } = this.props;
        dispatch(actions.getTrackingData(this.state.trackingId));
    }

    downloadPdf = (pdfurl) => {
        console.log("pdf path");
        window.open(API_URL + "/" + pdfurl);
    }    

    render() {
        console.log("trackingData: ", this.props.trackingData)
        const data = this.props.vehicleServicingDetatils && this.props.vehicleServicingDetatils.data && this.props.vehicleServicingDetatils.data;
        return (
            <div className="bodycolor">
                <CustomerNavbarComponent />
                <CustomerSidebarComponent />
                <div className="gridwrapper">
                    <div className="col-sm-6 form-group">
                        <div className="form-group text-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="trackingid"
                                    className="form-control"
                                    placeholder="Tracking ID"
                                    value={this.state.trackingId}
                                    onChange={this.onPropertyChange.bind(this)}
                                />
                                <span className="input-group-btn">
                                    <input
                                        type="submit"
                                        name="submit"
                                        className="btn btn-warning btn-md"
                                        value="CHECK STATUS"
                                        onClick={e => this.getTrackingData(e)}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tablebox">
                        <h5>Vehicle Servicing Details</h5>
                        <table className="table">
                            <thead className="table-active">
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Service Date</th>
                                    <th>Vehicle Type</th>
                                    <th>Status</th>
                                    <th>Bill Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length > 0 ?
                                        (
                                            data && data.map(
                                                (items, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{items.startDate.slice(0, 10)}</td>
                                                            <td>{items.vehical_brand}</td>
                                                            <td>
                                                                {
                                                                    items.service_status =='Approved' ?
                                                                    <img src={approved} alt="approved" height="20" width="20"></img>
                                                                     : 
                                                                    <img src={notApproved} alt="approved" height="20" width="20"></img>
                                                                }
                                                            </td>
                                                            <td>
                                                               <button className="unstyled-button" onClick={this.downloadPdf.bind(this, items.billingpdfpath)}> 
                                                                   <img src={pdf} alt="approved" height="22" width="22"></img>
                                                               </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            )

                                        ) :
                                        <tr><td>No data available....!</td></tr>
                                }

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vehicleServicingDetatils: state.vehicleServicingDetatilsReducer.vehicleServicingDetatils || {},
        trackingData: state.vehicleServicingDetatilsReducer.trackingData || []
    };
};

export default connect(mapStateToProps)(CustomerComponent);
