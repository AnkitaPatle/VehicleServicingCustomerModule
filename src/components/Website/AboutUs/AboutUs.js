import React, { Component } from 'react';
import { Form, Button, ButtonGroup } from 'reactstrap';
import NavBar from "../NavBar/NavBar";
import aboutUs from '../../../assets/images/aboutUs.png';
class AboutUs extends Component {

    constructor() {
        super();
        this.state = {}
        this.bookNow = this.bookNow.bind(this);
        this.contactUs = this.contactUs.bind(this);
        this.ourService = this.ourService.bind(this);
    }

    bookNow(e) {
        this.props.history.push('/loginIn');
    }
    contactUs(e) {
        this.props.history.push('/contactUs');
    }
    ourService(e) {
        this.props.history.push('/ourOffers');
    }

    render() {
        const style = {
            marginLeft: '2%'
        };
        return (
            <div className="">
                <NavBar></NavBar>
                <div>
                    <div>
                        <h1 style={{ textAlign: "center" }}>About Us</h1>
                        <h2 style={{ textAlign: "center" }}>Vehicle Servicing aims to make your two wheeler ownership, simple, effective and stress free.</h2>
                    </div>

                    <div>
                        <Form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
                            <ButtonGroup aria-label="Basic example">
                                <Button className="mx-2 aboutButton" onClick={this.bookNow}>BOOK NOW</Button>
                                <Button  className="mx-2 aboutButton" onClick={this.contactUs}>CONTACT Us</Button>
                                <Button  className="mx-2 aboutButton" onClick={this.ourService}>OUR SERVICES</Button>
                            </ButtonGroup>
                        </Form>
                    </div>
                    <img src={aboutUs} alt="vehicle" height="100%" width="96%" style={style}></img>
                </div>
            </div>
        );
    }
}

export default AboutUs;