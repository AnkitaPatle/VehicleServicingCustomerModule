import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Button } from 'reactstrap';
import NavBar from "../NavBar/NavBar";
import vehicle from '../../../assets/images/vehicle.png';
class Dashboard extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/vehicleStatus');
    }
    render() {
        const style = {
            marginLeft: '2%'
        };
        return (
            <div className="">
                <NavBar></NavBar>
                
                <div className="mainDiv">
                   <div>
                       <h1 style={{textAlign:"center"}}>Add More Life To Your Vehicle</h1>
                   </div>
                    <div className="dashboard shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                            <Form onSubmit={this.handleSubmit} noValidate>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Button className="dash_Button">TRACK YOUR VEHICLE STATUS</Button> <br></br>
                                            <label className="dash_Lable">OR</label><br/>
                                            <label className="call_lable">Call Us On 123456789</label>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <img src={vehicle} alt="vehicle" height="100%" width="100%" style={style}></img>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;