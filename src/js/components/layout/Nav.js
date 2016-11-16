import React from "react";
import { IndexLink, Link, hashHistory } from "react-router";
import { connect } from "react-redux"


import {fetchUser, logout} from "../../actions/userActions";

@connect((store) => {
  return {
    user: store.user.user,
    loggedIn: store.user.loggedIn
  };
})
export default class Nav extends React.Component {
  constructor() {
    super()
  }

    handleLogIn(){
        if(this.props.loggedIn){
            this.props.dispatch(logout())
        }
    }


  render() {
    const { location } = this.props;      
    const loggedIn = this.props.loggedIn ? "Log Out" : "Log In";
    const dashboardOrHome = this.props.loggedIn ? "dashboard" : "/";
    return (
    <header class="Header">
        <div class="GrayBar">
            <div class="GrayBarContents">
                <div class="PhonNum">816-555-5555</div>
                <Link to="signup"><div class="SignUp">Sign Up</div></Link>
                <Link to="dashboard" onClick={this.handleLogIn.bind(this)}><div class="LogIn">{loggedIn}</div></Link>
            </div>
        </div>
        <div class="WhiteBar">
            <Link to={dashboardOrHome}><div class="Logo"></div></Link>
            <div class="NavUL">
                <div class="NavTab">Plans / Pricing</div>
                <div class="NavTab">Equipment</div>
                <div class="NavTab">Support</div>
            </div>
        </div>
    </header>
    );
  }
}
