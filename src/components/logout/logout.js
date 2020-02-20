import React, { Component } from 'react'
import { withRouter, Redirect } from "react-router-dom";

class LogoutComponent extends Component {

  componentDidMount() {    
    sessionStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default withRouter(LogoutComponent);
