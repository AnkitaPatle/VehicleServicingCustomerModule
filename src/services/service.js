import { API_URL } from "./../config.js";
import axios from "axios";

export const onLogin = login => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", login);
    axios({
      method: "post",
      url: API_URL + "/users/api/authenticate",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: login
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export const registerUser = register => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", register);
    axios({
      method: "post",
      url: API_URL + "/users/api/register",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: register
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export const otpVerify = otp => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", otp);
    axios({
      method: "put",
      url: API_URL + "/users/api/verifyOTP",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: otp
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export const otpVerify1 = otp => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", otp);
    axios({
      method: "put",
      url: API_URL + "/users/api/resetpasswordOTP",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: otp
    })
        .then(function (response) {
          if (response) {
            resolve(response);
          }
        })
        .catch(function (error) {
          resolve(error);
        });
  });
};

export const contactUs = contact => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", contact);
    axios({
      method: "post",
      url: API_URL + "/admin/api/contactus",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: contact
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export const adminRegisterUser = register => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", register);
    axios({
      method: "post",
      url: API_URL + "/admin/api/user",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: register
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export const adminUpdateUser = register => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", register);
    axios({
      method: "put",
      url: API_URL + "/admin/api/user",
      data: register
    })
      .then(function (response) {
        if (response) {
          resolve(response);
        }
      }) 
      .catch(function (error) {
        resolve(error);
      });
    });
  };
  
      
export const forgotEmail = email => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", email);
    axios({
      method: "post",
      url: API_URL + "/users/api/forgot",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
    
      data: email
    })
        .then(function (response) {
          if (response) {
            resolve(response);
          }
        })
        .catch(function (error) {
          resolve(error);
        });
  });
};

export const setNewPass = data => {
  return new Promise((resolve, reject) => {
    console.log("In Service :", data);
    axios({
      method: "put",
      url: API_URL + "/users/api/updatepassword",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: data
    })
        .then(function (response) {
          if (response) {
            resolve(response);
          }
        })
        .catch(function (error) {
          resolve(error);
        });
  });
};
export const serviceRequest = request =>{
  return new Promise((resolve,reject) => {
    console.log("In Service :", request);
    axios({
      method: "post",
      url: API_URL + "/admin/api/servicerequest",
      config: {
        headers: {
          "content-type": "application/json"
        }
      },
      data: request

    })
        .then(function (response){
        if(response){
          resolve(response);
         }
       })
        .catch(function(error){
          resolve(error)
        })

  });
};

export const searchUserbyPhone = phoneNumber => {

    return new Promise((resolve,reject) => {
        console.log("In Service :", phoneNumber);
        axios({
            method: "get",
            url: API_URL + "/admin/api/searchUser?contact_number="+phoneNumber,
            config: {
                headers: {
                    "content-type": "application/json"
                }
            },
            data: phoneNumber

        })
            .then(function (response){
                if(response){
                    resolve(response);
                }
            })
            .catch(function(error){
                resolve(error)
            })

    });

};

export const vehicleCategory = request => {
  return new Promise( (resolve, reject) => {
    axios({
      method:"post",
      url : API_URL + "/admin/api/vehicleCategory",
      config: {
        headers : {
          "content-type": "application/json"
        }
      },
      data:request
    }).then(function(response){
      if(response){
        resolve(response)
      }
    }).catch(function(error){
      resolve(error)
    })
  });

  };

export const getallCategory= category =>{
    return new Promise((resolve,reject) =>{
        axios({
            method:"get",
            url: API_URL + "/admin/api/vehicleCategory",
        }).then(response =>{
            if(response){
                console.log("response" , response);
                resolve(response);
            }
        }).catch(error =>{
            return error;
        })
    })
};

export const newService = newservicedata =>{
    console.log("newservicedata" , newservicedata);

    return new Promise((resolve,reject) => {
        axios({
            method:"get",
            url: API_URL + "/admin/api/servicerequests?status="+newservicedata.status + "&limit=" +newservicedata.limit + "&skip="+ newservicedata.skip,
        }).then(response =>{
            if(response){
                console.log("response new" , response);
                resolve(response);
            }
        }).catch(error =>{
            return error;
        })

    })
};



export const supervisotList = role =>{
    console.log("role" + role)
    return new Promise((resolve,reject) => {
        axios({
            method:"get",
            url: API_URL + "/admin/api/userbyrole?role="+role


        }).then(response =>{
            if(response){
                console.log("response" , response);
                resolve(response);
            }
        }).catch(error =>{
            return error;
        })

    })
};


export const assignSupervisor = data => {

    console.log("Assign " , data);

    return new Promise((resolve,reject) => {
        axios({
            method:"put",
            url: API_URL + "/admin/api/assignsupervisor",
            config: {
                headers : {
                    "content-type": "application/json"
                }
            },
            data:data

        }).then(response =>{
            if(response){
                console.log("response" , response);
                resolve(response);
            }
        }).catch(error =>{
            return error;
        })

    })
};

export const pendingService = pendingservicedata =>{
    console.log("newservicedata" , pendingservicedata);

    return new Promise((resolve,reject) => {
        axios({
            method:"get",
            url: API_URL + "/admin/api/servicerequests?status="+pendingservicedata.status + "&limit=" +pendingservicedata.limit + "&skip="+ pendingservicedata.skip,
        }).then(response =>{
            if(response){
                console.log("response new" , response);
                resolve(response);
            }
        }).catch(error =>{
            return error;
        })

    })
};







