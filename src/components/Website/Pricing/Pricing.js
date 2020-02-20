import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import RoutineService from './RoutineService';
import 'bootstrap/dist/css/bootstrap.min.css';
import LabourCharges from "./LabourCharges";
import DentingPainting from "./DentingPainting";
import NavBar from "../NavBar/NavBar";

class Pricing extends Component {

  render() {
    return (
      <div align=" center ">
        <NavBar></NavBar>
        <Container fluid>
          <br /><br />
          <Row>
            <Col lg={12}>
              <h6 className="FormField__Header">
                At Vehicle servicing we have devised a dedicated and systematically structured process which aims for a hassle free and eﬀortless customer experience.<br />
                We constantly pursue to create cost-eﬃcient and eﬀective vehicle maintenance solution at your ﬁngertips.
              </h6>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="shadow-lg bg-white rounded">
                <div>
                  <Tabs tabBarUnderlineStyle={{ "border-bottom-color": "red" }} defaultTab="one">
                    <TabList>
                      <Tab className="pricing_tab" tabFor="one">
                        Routine Service
                      </Tab>
                      <Tab className="pricing_tab" tabFor="two">
                        Labour charges &amp; Spare Part replacement
                      </Tab>
                      <Tab className="pricing_tab" tabFor="three">
                        Denting Painting
                      </Tab>
                    </TabList>
                    <TabPanel tabId="one">
                      <RoutineService />
                    </TabPanel>
                    <TabPanel tabId="two">
                      <LabourCharges />
                    </TabPanel>
                    <TabPanel tabId="three">
                      <DentingPainting />
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Pricing;