import React, { Component } from 'react'
import CustomerNavbarComponent from '../customer-navigation/customer-navbar';
import CustomerSidebarComponent from '../customer-navigation/customer-sidebar';
import { connect } from 'react-redux';
import * as actions from '../customer-action';

class VehicleHistoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('props :', this.props)
        const { dispatch } = this.props;
        dispatch(actions.getAllVehicleServicingDetatis());
    }

    trackVehicle = () => {
        this.props.history.push('/vehicleTracking');
    }

    render() {
        console.log("vehicleServicingDetatils:: ", this.props.vehicleServicingDetatils);
        const data = this.props.vehicleServicingDetatils && this.props.vehicleServicingDetatils.data && this.props.vehicleServicingDetatils.data;
        return (
            <div className="bodycolor">
                <CustomerNavbarComponent />
                <CustomerSidebarComponent />
                <div className="gridwrapper">
                    <h4>Vehicle History</h4>
                    <table class="table">
                        <thead class="table-active">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Service Date</th>
                                <th>Vehicle Type</th>
                                <th></th>
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
                                                            <button className="unstyled-button" onClick={this.trackVehicle}>
                                                                View Details &nbsp;
                                                                    <i class='fa fa-angle-down'></i>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        vehicleServicingDetatils: state.vehicleServicingDetatilsReducer.vehicleServicingDetatils || {}
    };
};

export default connect(mapStateToProps)(VehicleHistoryComponent);
