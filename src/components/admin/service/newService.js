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
import { bindActionCreators } from "redux";
import {newServiceReq,getSupervisotList,assignSupervisorList} from "../../../store/actions/newService.action";


class NewService extends Component{
    constructor(){
        super();
        this.state={
            id:'',
            startDate:'',
            vehicle_name: '',
            name: '',
            supervisorId : '',
            role:'',
            toggledClearRows:false,
            newvehicledata:[],
            supervisorlist:[],
            servicedata:[]

        };

        this.assignSupervisor=this.assignSupervisor.bind(this);
    }

    componentDidMount() {
        var data ={
            // status :"In Queue",
            status :"New",
            limit:20,
            skip:0
        };


        this.props.newServiceReq(data);
        let role ="supervisor";
        this.props.getSupervisotList(role)
    }

    componentDidUpdate = prevProps =>{
        var data ={
            // status :"In Queue",
            status :"New",
            limit:20,
            skip:0
        };

        const assignsupervisor= this.props.newservice.assignsupervisor;

        if(prevProps.newservice.assignsupervisor !== assignsupervisor){
            if(assignsupervisor.status ===200){
                this.props.newServiceReq(data);
                this.setState({
                    supervisorId : ""
                })

            }
        }

    };

    componentWillReceiveProps= nextProps => {
        const newreqdata = nextProps.newservice.getnewReqdata.data;

        if(newreqdata){
            this.setState({
                newvehicledata : newreqdata.data
            });

        }

        const supervisorList = nextProps.newservice.getsupervisordata.data;
        if(supervisorList){
            this.setState({
                supervisorlist : supervisorList.data
            })
        }


    };

    assignSupervisor = (e) =>{
        e.preventDefault();

        const list_services = [];
        this.state.servicedata.map((serviceValue) => {
                list_services.push(
                serviceValue.id
            )

        });

       var supervisordata  = {
           list_of_services : list_services,
           supervisor_id :this.state.supervisorId
        };

        this.props.assignSupervisorList(supervisordata);


    };

    onPropertyChange = (e) =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };



    render() {

        var obj = Object.keys(this.state.newvehicledata);
        const hStyle = { color: '#02075d' };
        const wellStyles = {maxWidth: 250, margin: '0 auto 10px'};

        const{
            id,
            startDate,
            vehicle_name,
            supervisorId,
            name,

        }=this.state;


        const data=[];

        for(var i=0; i<obj.length ; i++){
            data.push({
                id:this.state.newvehicledata[i]._id,
                startDate:this.state.newvehicledata[i].startDate,
                vehicle_name:this.state.newvehicledata[i].vehical_name,
                name:this.state.newvehicledata[i].customer.name,

            })

        }

        let options = this.state.supervisorlist.map((listvalue) =>
            <option
                value={listvalue.user_id}
            > {listvalue.name}
            </option>
        );

        const columns = [
            {
                name: "ID",
                selector: "id",
                sortable: true,
                show: false
            },
            {
                name: "Date",
                selector: "startDate",
                sortable: true
            },
            {
                name: "Vehicle Type",
                selector: "vehicle_name",
                sortable: true
            },
            {
                name: "Customer Name",
                selector: "name",
                sortable:true,


            }

        ];




        const handleChange = (state) => {
            this.setState({
                servicedata : state.selectedRows
            })

        };

        return(

            <div>
                <NavBar/>
                <SideBar/>
                <Container className="p-5">
                    <form method="post">
                        <h3 className="text-left mb-4 mt-1" style={hStyle}>New Service </h3>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <DataTable
                                title="Vehicle List"
                                columns={columns}
                                data={data}
                                selectableRows
                                pagination
                                paginationPerPage={10}
                                paginationTotalRows={data.length}
                                onSelectedRowsChange={handleChange}

                            />


                            <Form method="post" onSubmit={this.assignSupervisor}>
                                <Row inline>

                                    <Col md={4}>
                                      <FormGroup>
                                          <Label>Select Supervisor</Label>
                                          <Input type="select" name="supervisorId" id="supervisorId" value={this.state.supervisorId}  onChange={this.onPropertyChange} >
                                              <option> Select Supervisor </option>
                                              {options}
                                          </Input>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mt-4 p-2">
                                            <Label></Label>
                                            <Button color="warning" className ="adminassignbtn">ASSIGN</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
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
            newServiceReq:newServiceReq,
            getSupervisotList:getSupervisotList,
            assignSupervisorList :assignSupervisorList
        },
        dispatch
    );
}

function mapStateToProps({ newservice }) {
    return { newservice: newservice };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewService));


