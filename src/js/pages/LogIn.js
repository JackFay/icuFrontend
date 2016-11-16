import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import LoginComponent from "../components/login/LoginComponent"
import DashboardComponent from "../components/dashboard/DashboardComponent"

@connect((store) => {
  return {
    loggedIn: store.user.loggedIn,
    userId: store.user.userId
  };
})
export default class LogIn extends React.Component {
    
    constructor(){ 
        super()
    }
    

  render() {
      console.log(this.props)
    if(!this.props.loggedIn){
        return <LoginComponent />
    }else{
        return <DashboardComponent />
    }
             
  }
}
