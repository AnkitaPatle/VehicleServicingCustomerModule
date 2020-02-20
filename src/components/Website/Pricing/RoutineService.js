import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Card, CardText, CardTitle } from "reactstrap";
import axios from 'axios'

const RoutineService = () => {
  const [servicetype, setService] = useState("bike_service");
  const [data, setData] = useState([]);
  const [cardata, setCarData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://10.0.1.149:3000/customer/api/routineServiceforbike')
        .then(res => {
            setCarData(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setLoad(true)
        })
}, []);


useEffect(() => {
  axios.get('http://10.0.1.149:3000/customer/api/routineServiceforcar')
      .then(res => {
          setData(res.data);
          setLoad(true);
      })
      .catch(err => {
          setError(err.message);
          setLoad(true)
      })
}, []);

  const printServiceName = data.data;
  const carServiceName = cardata.data;
  return (
    <>
      <div className="col-lg-12">
        <div
          className="justify-content-center"
          style={{ display: "flex", padding: "20px 0px" }}
        >
          <div align=" center ">
            <label className="checkbox-block" style={{ padding: "0px 20px" }}>
              <input
                type="radio"
                style={{ backgroundColor: "red" }}
                value="bike_service"
                checked={servicetype === "bike_service"}
                onChange={e => setService(e.target.value)}
              />
              <span className="label-radio">Bike Service</span>
            </label>
            <label className="checkbox-block" style={{ padding: "0px 20px" }}>
              <input
                type="radio"
                value="car_service"
                checked={servicetype === "car_service"}
                onChange={e => setService(e.target.value)}
              />
              <span className="label-radio">Car Service</span>
            </label>
          </div>
        </div>
      </div>


      {servicetype === "bike_service" ? (
        <>
          <Container>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              <h5>ROUTINE SERVICE (CHARGES INCLUDE CHARGES FOR PICK N' DROP AND DOORSTEP) </h5>
            </p>
           
          </Container>
          <Container style={{ padding: "10px 0px 0px 0px" }}>
            <Row className="justify-content-center">
              <Col lg={12}>
                <Card body className="ml-5 my-3 mr-5" style={{ borderTopColor: '#f1b10f', borderTopWidth: '10px' }}>
                  <CardTitle style={{ fontWeight: "bold" }}>
                    <h6 align="left">ROUTINE SERVICE INCLUDES </h6>
                  </CardTitle>
                  <CardText>
                    <Row>
                      <Col lg={12}>
                        <ul style={{ columns: "3" }}>
                          {printServiceName && printServiceName.map((vehicledata) => {
                            return <h6><li align="left">{vehicledata.serviceName}</li></h6>
                          })}
                        </ul>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
          <>
            <Container>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "24px"
                }}
              >
                <h5>Routine Service[Rs 800 - Rs 1500] Excluding engine oil</h5>
              </p>
              <Row className="justify-content-center">
                <Col xs lg="5">
                  <ul className="pricing_data_list">

                  </ul>
                  <p
                    className="pricing_data_list"
                    style={{ padding: "0px", listStylePosition: "inside" }}
                  >
                  </p>
                </Col>
              </Row>
            </Container>
            <Container style={{ padding: "10px 0px 0px 0px" }}>
              <Row className="justify-content-center">
                <Col lg={12}>
                  <Card body className="ml-5 my-3 mr-5 shadow-lg" style={{ borderTopColor: '#f1b10f', borderTopWidth: '10px' }}>
                    <CardTitle style={{ fontWeight: "bold" }}>
                      <h6 align="left">Routine Checklist for Car : </h6>
                    </CardTitle>
                    <CardText>
                      <Row className="justify-content-md-center" >
                        <Col lg={12}>
                          <ul style={{ columns: "3" }}>
                            {carServiceName && carServiceName.map((vehicledata) => {
                              return <h6><li align="left">{vehicledata.serviceName}</li></h6>
                            })}

                          </ul>
                        </Col>
                      </Row>
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        )}

    </>

  )
}

export default RoutineService;

