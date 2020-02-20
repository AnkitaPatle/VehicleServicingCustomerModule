import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "reactstrap";
import vehicledata from './vehicledata.json';
import axios from 'axios'

const LabourCharges = () => {
  const [servicetype, setService] = useState("bike_service");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://10.0.1.149:3000/maintenance/api/AllBikeServiceChargebyservicename')
      .then(res => {
        setData(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true)
      })
  }, []);

  return (
    <>
      <div className="col-lg-12">
        <div
          className="justify-content-center"
          style={{ display: "flex", padding: "20px 0px" }}
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
          <Row className="justify-content-center">
            <Col>
              <Table>
                <thead style={{ backgroundColor: "lightgrey" }}>
                  <tr className="table-heading">
                    <th>SERVICE NAME</th>
                    <th>80 cc - 135 cc</th>
                    <th>135 cc - 180 cc</th>
                    <th>200 cc - Above</th>
                    <th>Moped</th>
                    <th>Bullet</th>
                    <th>KTM</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    vehicledata.map((vehicledata, index) => {
                      return (
                        <tr>
                          <td>{vehicledata.Service_Name}</td>
                          <td>{vehicledata.cc_80_135}</td>
                          <td>{vehicledata.cc_135_180}</td>
                          <td>{vehicledata.cc_200_above}</td>
                          <td>{vehicledata.Moped}</td>
                          <td>{vehicledata.Bullet}</td>
                          <td>{vehicledata.KTM}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      ) : (
          <p className="mr-5 ml-5"><b>Labour charges for car servicing would depend upon car model. Labour Charges may be vary from 1000 - 3000</b></p>
        )
      }
    </>
  );
}

export default LabourCharges;
