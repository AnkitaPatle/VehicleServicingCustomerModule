import React, { Component } from 'react';
import { Form, Row, Col, Button, Card, CardTitle, CardText } from 'reactstrap';
import NavBar from "../NavBar/NavBar";
class OurOffers extends Component {

    constructor() {
        super();
        this.state = { }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/loginIn');
    }
    render() {
        return (
            <div className="">
                <NavBar></NavBar>
                <div>
                    <div>
                        <h1 style={{ textAlign: "center", marginTop:"2%"}}>Special Pricing</h1>
                        <h2 style={{ textAlign: "center"}}>*Below charges are excluding service tax charges</h2>
                    </div>
                    <div className="">
                        <div style={{marginLeft:"8%"}}>
                            <Form onSubmit={this.handleSubmit} noValidate inline>
                                <Row>
                                    <Col sm="4">
                                        <Card body className="ml-5 my-5 shadow-lg p-3 mb-5 bg-white rounded" style={{ borderTopColor: '#f1b10f', borderTopWidth:'10px'}}>
                                            <CardTitle style={{ textAlign: "center", fontSize: "1.7em" ,fontWeight:"bold"}}>BIKE REGULAR SERVICING</CardTitle>
                                            <CardTitle style={{ textAlign: "center" , fontSize: "1.8em" ,fontWeight:"bold"}}>Rs 299*- Rs 1200*</CardTitle><hr></hr>
                                            <CardText><li>Mop servicing Rs 299*- Rs 499*</li></CardText>
                                            <CardText><li>Motorcycle servicing Rs 299*- Rs 499*</li></CardText>
                                            <CardText><li>High cc servicing Rs 699*- Rs 1199*</li></CardText>
                                            <CardText><li>Routine service, free delivery, in-depth analysis, periodic follow ups</li></CardText>
                                            <Button className="OffersButton">Book Now</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card body className="ml-5 my-5 shadow-lg p-3 mb-5 bg-white rounded" style={{ borderTopColor: '#f1b10f', borderTopWidth:'10px'}}>
                                            <CardTitle style={{ textAlign: "center", fontSize: "1.7em" ,fontWeight:"bold"}}>CAR REGULAR SERVICING</CardTitle>
                                            <CardTitle style={{ textAlign: "center", fontSize: "1.8em" ,fontWeight:"bold"}}>Rs 800*- Rs 2000*</CardTitle><hr></hr>
                                            <CardText><li>Hatchback servicing Rs 800*- Rs 1500*</li></CardText>
                                            <CardText><li>Sedan servicing Rs 800*- Rs 1800*</li></CardText>
                                            <CardText><li>SUV servicing Rs 1000*- Rs 2000*</li></CardText>
                                            <CardText><li>Routine service, free delivery, in-depth analysis, periodic follow ups</li></CardText>
                                            <Button className="OffersButton">Book Now</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card body className="ml-5 my-5 shadow-lg p-3 mb-5 bg-white rounded" style={{ borderTopColor: '#f1b10f', borderTopWidth:'10px'}}>
                                            <CardTitle style={{ textAlign: "center" ,fontSize: "1.7em" ,fontWeight:"bold"}}>OTHER CAR SERVICING</CardTitle>
                                            <CardTitle style={{ textAlign: "center",fontSize: "1.8em" ,fontWeight:"bold"}}>Rs 699*- Rs 1199*</CardTitle><hr></hr>
                                            <CardText><li>Denting Painting</li></CardText>
                                            <CardText><li>AC Repair</li></CardText>
                                            <CardText><li>Car Spa</li></CardText>
                                            <CardText><li>Restorations</li></CardText>
                                            <CardText></CardText>
                                            <Button className="OffersButton">Book Now</Button>
                                        </Card>
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

export default OurOffers;