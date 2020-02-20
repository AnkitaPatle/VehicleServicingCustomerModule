import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Cardata from './CarDentingPaintingdata.json';
import axios from 'axios'

const DentingPainting = () => {
  const [servicetype, setService] = useState("bike_service");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://10.0.1.149:3000/maintenance/api/AllBikeDentingPaintingCharges')
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

  return (
    <>
      <div className="col-lg-12 denting-list-border">
        <div
          className="justify-content-center"
          style={{ display: "flex", padding: "20px 0px 10px 0px" }}
        >
          <div>
            <label className="checkbox-block" style={{ padding: "0px 20px" }}>
              <input
                type="radio"
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
            <Row className="justify-content-center">
              <Col xs lg="9">
                <ul style={{ columns: "3" }}>
                  {printServiceName && printServiceName.map((vehicledata) => {
                    return <h6><li align="left">{vehicledata.serviceName}</li></h6>
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
          <>
            <Container>
              <Row className="justify-content-center">
                <Col xs lg="12">
                  {<ul align="left" style={{ columns: "1" }}>
                    {Cardata.map((Cardata, index) => {
                      return <h6><b align="left">{Cardata.Car_Name}</b><li>{"Full Part Denting & Painting : Rs " + Cardata.Full_Part_Denting_Painting}</li>
                        <li>{"Partial Part Denting & Painting : Rs " + Cardata.Partial_part_denting_Painting}</li><br /></h6>
                    })}
                  </ul>}
                </Col>
              </Row>
            </Container>
          </>
        )}
    </>
  );
};

export default DentingPainting;
