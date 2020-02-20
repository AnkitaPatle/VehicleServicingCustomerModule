import React,{Component} from 'react';
import {
    Col,
    Form,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    Container
} from "reactstrap";

import SideBar from '../sidebar/SideBar';
import NavBar from "../navbar/NavBar";
import DataTable from "react-data-table-component";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import { pendingServiceReq} from "../../../store/actions/pendingService.action";
import { bindActionCreators } from "redux";

import {newServiceReq,getSupervisotList} from "../../../store/actions/newService.action"
import {getVehicleCategory} from "../../../store/actions/vehicleCategory.action"


class PendingService extends Component{
    constructor(){
        super();
        this.state={
            date:'',
            vehicleType: '',
            customerName: '',
            supervisorName: '',
            pendingServiceReqData : [],
            supervisorlist : []

        }
    }

    componentDidMount() {

        var data ={
            status :"In Queue",
            limit:20,
            skip:0
        };
        this.props.newServiceReq(data);
        let role ="supervisor";
        this.props.getSupervisotList(role)
    }

    componentWillReceiveProps= nextProps => {
        const pendingReq = nextProps.pendingServiceData.data;
        console.log("pendingReq" , pendingReq);
        if(pendingReq)
        {
            this.setState({
                pendingServiceReqData :pendingReq.data
            })

        }

        const supervisorList = nextProps.getsupervisordata.data;
        if(supervisorList){
            this.setState({
                supervisorlist : supervisorList.data
            })
        }

    };

    assignSupervisorClick = (e) => {

    };

    render() {
        const hStyle = { color: '#02075d' };
        const wellStyles = {maxWidth: 250, margin: '0 auto 10px'};
        var obj = Object.keys(this.state.pendingServiceReqData);
        const{
            date,
            vehicleType,
            customerName,
            supervisorName
        }=this.state;

        const data=[];

        let options = this.state.supervisorlist.map((listValue) =>

            <option
                value={listValue.user_id}
            > {listValue.name}
            </option>
        );



        for(var i=0; i<obj.length ; i++){
            const supervisor = this.state.pendingServiceReqData[i].assigned_supervisor;
            let supervisorId= "";
           if(supervisor){
                supervisorId = supervisor._id;
           }

           console.log("supervisorId" , supervisorId)


            data.push({
                id:this.state.pendingServiceReqData[i]._id,
                startDate:this.state.pendingServiceReqData[i].startDate,
                vehical_name:this.state.pendingServiceReqData[i].vehical_name,
                name:this.state.pendingServiceReqData[i].customer.name,
                supervisor: <div>
                        <Input type ="select" title="Resume" value={supervisorId}  >
                            <option> Select Supervisor </option>
                            {options}

                        </Input>
                    </div>,
                assign :  <div>
                    <Label name="assignSupervisor" id="assignSupervisor" name="assignSupervisor" onClick={this.assignSupervisorClick}> Assign </Label>
                </div>

            })

        }





        const columns = [
            {
                name: "ID",
                selector: "id",
                sortable: true
            },
            {
                name: "Date",
                selector: "startDate",
                sortable: true
            },
            {
                name: "Vehicle Type",
                selector: "vehical_name",
                sortable: true
            },
            {
                name: "Customer Name",
                selector: "name",
                sortable:true

            },
            {
                name: "Supervisor Name",
                selector: "supervisor",
                sortable:true

            },
            {
                name: "",
                selector: "assign",
                sortable:true

            }


        ];

        return(
            <div>
                <NavBar/>
                <SideBar/>
                <Container className="p-5">
                    <form method="post">
                        <h3 className="text-left mb-4 mt-2" style={hStyle}>Pending Service </h3>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <DataTable
                                title="Vehicle List"
                                columns={columns}
                                data={data}
                                selectableRows

                                pagination
                                paginationPerPage={10}
                                paginationTotalRows={data.length}
                            />
                        </div>
                    </form>

                </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            pendingServiceReq:pendingServiceReq,
            newServiceReq:newServiceReq,
            getSupervisotList :getSupervisotList,

        },
        dispatch
    );
}

function mapStateToProps({ pendingService , newservice}) {
    return {
        pendingServiceData: newservice.getnewReqdata,
        getsupervisordata:newservice.getsupervisordata,
        assignsupervisor: newservice.assignsupervisor
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PendingService));


