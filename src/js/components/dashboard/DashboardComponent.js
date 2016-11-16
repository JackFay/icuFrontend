import React from "react"
import {hashHistory, Link} from "react-router";
import {connect} from "react-redux";
import {user_login} from "../../actions/userActions";
import {fetchUser} from "../../actions/userActions";
@connect((store) => {
  return {
    store: store,
    user: store.user,
    loggedIn: store.user.loggedIn,
    error: store.error
  };
})
export default class DashboardComponent extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div class="MainContent">
        <section class="FirstSection">
            <div class="MarketingContainer">
                <h1 class="IntroHeading">Dashboard</h1><br/>
				
                <a href="Register.html">
				<div class="Marketing DashButton">
                    <div class="MarketingPic Pic2"></div>
                    <div class="MarketingHeading">Register Device</div>
                    <p class="MarketingContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
				</a>
				
                <Link to="settings">
				<div class="Marketing DashButton">
                    <div class="MarketingPic Pic1"></div>
                    <div class="MarketingHeading">Settings</div>
                    <p class="MarketingContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div> 
				</Link>
				
                <Link to="images">
				<div class="Marketing DashButton">
                    <div class="MarketingPic Pic3"></div>
                    <div class="MarketingHeading">View Photos</div>
                    <p class="MarketingContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
				</Link>
				
            </div>
        </section>
        
    </div>   
        )
    }
}