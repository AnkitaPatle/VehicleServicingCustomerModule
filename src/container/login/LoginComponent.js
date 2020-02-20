import React, { Component } from 'react'
import ReCaptcha from 'react-recaptcha';
import HeaderComponent from '../../components/NavBar/NavBar';
import img from '../../assets/images/servicing.png'

class LoginComponent extends Component {
      state = {
        phonenumber: '',
        password: ''
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })

      }

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

      }

    recaptchaLoaded() {
        console.log("capcha loaded sucessfully");
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
                      Login to your account
                    </h4>
                    </div>
                    <div className="box">
                    <div className="row"> 
                      <div className="col-sm-6 form-group">
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
                     <div className="form-group text-right">
                    <label id="forgotpassword" htmlFor="forgotpassword" >
                            Forgot Password?
                    </label>
                    </div> 
                    <div className="form-group">
                     <ReCaptcha
                        sitekey="6Lc95sIUAAAAADjcYhQlTeSWsltz_AL1hijHChe3"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded.bind(this)}
                    />               
                    </div>  
                    <div className="form-group">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-warning btn-md form-control"
                        value="LOGIN"
                        onClick={this.handleSubmit.bind(this)}
                      />                                          
                    </div>  
                    
                    
                   
                      </div>
                      <div className="col-sm-6 form-group">
                       <div id="images" className="form-group">
                           <img src={img} alt="Cinque Terre" />
                        
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
export default LoginComponent;
