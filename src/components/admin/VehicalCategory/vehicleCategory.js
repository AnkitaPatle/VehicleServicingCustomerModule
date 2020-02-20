import React,{Component} from 'react';
import SideBar from '../sidebar/SideBar';
import NavBar from "../navbar/NavBar";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {
    FormGroup,
    Label,
    ListGroup,
    ListGroupItem,
    Button,
    Container,
    InputGroup,
    InputGroupAddon,
    Input, Form, Row, Col,
} from "reactstrap";
import {addVehicleCategory,getVehicleCategory} from "../../../store/actions/vehicleCategory.action"

class vehicleCategory extends Component {
    constructor() {
        super();
        this.state={
            vehicleCategory: '',
            categoryData:[]

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.props.getVehicleCategory();
    }

    componentDidUpdate(prevProps) {
        const addCategory = this.props.vehicleCat.addcategorydata;
        if (prevProps.vehicleCat.addcategorydata !== addCategory) {
            this.props.getVehicleCategory()
        }
    }

    componentWillReceiveProps = nextProps => {
        const vehicleData = nextProps.vehicleCat.getallcatdata.data.data;
        console.log("vehicleData", vehicleData);
        if(vehicleData){
            this.setState({
                categoryData:vehicleData
            })
        }
    };

    handleSubmit(e){
        e.preventDefault()
        const data = {
            vehicleCategory: this.state.vehicleCategory
        };
        this.props.addVehicleCategory(data)
    }

    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        const hStyle = { color: '#02075d' };
        const wellStyles = {maxWidth: 250, margin: '0 auto 7px'};
        var obj = Object.keys(this.state.categoryData);
        console.log(obj);
        return(
            <div>
                <NavBar/>
                <SideBar/>
                <Container className="p-5">
                    <form method="post" onSubmit={this.handleSubmit}>
                        <h3 className="text-left mb-4 mt-2" style={hStyle}>Vehicle Category </h3>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Row from>
                                <Col md={6}>
                                    <FormGroup>
                                        <ListGroup>
                                            {this.state.categoryData.map(function(listValue){
                                                console.log("listValue" ,vehicleCategory);
                                                return <ListGroupItem> {listValue.vehicleCategory}</ListGroupItem>
                                            })}

                                        </ListGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row from>
                                <Col md={6}>

                                    <FormGroup>
                                        <Label>Add new Category</Label>
                                        <InputGroup>
                                            <Input type="text" name="vehicleCategory" id="vehicleCategory" value={this.state.vehicleCategory} onChange={this.handleChange}/>
                                            <InputGroupAddon addonType="append">
                                                <div className="text-center" style={wellStyles}>
                                                    <Button className="adminvehiclebtn" color="warning"  block>ADD</Button>
                                                </div>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                       </div>
                    </form>

                </Container>

            </div>
        );
    }




}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addVehicleCategory: addVehicleCategory,
            getVehicleCategory:getVehicleCategory
        },
        dispatch
    );
}

function mapStateToProps({ vehicleCat }) {
    return { vehicleCat: vehicleCat };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(vehicleCategory));

