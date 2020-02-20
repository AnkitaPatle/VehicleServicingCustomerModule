import React, { Component } from 'react'
import HeaderComponent from '../../components/NavBar/NavBar';
import img from '../../assets/images/servicing.png'

class SignUpComponent extends Component {
  state = {
    name: '',
    city: '',
    email: '',
    address: '',
    phonenumber: '',
    password: '',
    confirmpassword: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)

  }

  render() {
    return (
      <div className="bodycolor">
        <HeaderComponent />
        <div className="container">
          <div className="main-content">
            <div id="person">
              <div className="container">
                <div
                  id="login-row"
                  className="row justify-content-center align-items-center"
                >
                  <div className="col-md-8">
                    <div className="col-md-12">
                      <div className="info">
                        <h4 id="fsize" className="text-center">
                          Register
                    </h4>
                      </div>
                      <div className="box">
                        <div className="row">
                          <div className="col-sm-6 form-group">
                            <div className="form-group">
                              <label htmlFor="name">
                                Name:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="city">
                                City:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="city"
                                id="city"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">
                                Email:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="confirmpassword">
                                Confirm Password:
                              </label>
                              <br />
                              <input
                                type="password"
                                name="confirmpassword"
                                id="confirmpassword"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <br />
                            <div className="form-group">
                              <input
                                type="submit"
                                name="submit"
                                className="btn btn-warning btn-md form-control"
                                value="REGISTER"
                                onClick={this.handleSubmit.bind(this)}
                              />
                            </div>

                          </div>
                          <div className="col-sm-6 form-group">
                            <div className="form-group">
                              <label htmlFor="address">
                                Address:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="phonenumber">
                                Phone Number:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="phonenumber"
                                id="phonenumber"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">
                                Password:
                              </label>
                              <br />
                              <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                onChange={this.handleChange.bind(this)}
                              />
                            </div>
                            <div id="images" className="form-group text-center">
                              <img src={img} alt="Cinque Terre" height="190" width="170" />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SignUpComponent;
