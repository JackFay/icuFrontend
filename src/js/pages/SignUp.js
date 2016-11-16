import React from "react";
import { Router, Route, Link, hashHistory } from 'react-router'
import axios from "axios";

export default class SignUp extends React.Component {
    
    constructor(){
        super();
        this.state = {
            username: "",
            hash: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            email: ""
        };
    }
    
    userNameChange(e){
        this.state.username = e.target.value;
    }
    
    passwordChange(e){
        this.state.hash = e.target.value;
    }
    
    firstNameChange(e){
        this.state.first_name = e.target.value;
    }
    
    lastNameChange(e){
        this.state.last_name = e.target.value;
    }
    
    phoneNumChange(e){
        this.state.phone_number = e.target.value;
    }
    
    emailChange(e){
        this.state.email = e.target.value;
    }
    
    onSubmit(e){
        console.log(this.state);
        axios.post('http://localhost:8000/api/new_user', this.state);
        hashHistory.push('dashboard');
    }
    
    
    render() {
    
    return (
        <div class="MainContent">
        <section class="SignUpSection">
            <h1 class="IntroHeading">Sign Up</h1>
            <div class="SignUpContainer">
                <div class="SignUpContentContainer">
					<h4 class="BillingH4">Account Info</h4>
                    <div class="TextboxLableContainer2">
                        <label>User Name</label>
                        <input id="username" type="text" name="lname" class="textbox" onChange={this.userNameChange.bind(this)}/>
                    </div>
                    <div class="TextboxLableContainer2">
                        <label>Password</label>
                        <input id="password" type="password" name="lname" class="textbox" onChange={this.passwordChange.bind(this)}/>
                    </div>
                    <h4 class="BillingH4">Personal Info</h4>
                    <div class="TextboxLableContainer2">
                        <label>First Name</label>
                        <input id="fname" type="text" name="lname" class="textbox" onChange={this.firstNameChange.bind(this)}/>
                    </div>
                    <div class="TextboxLableContainer2">
                        <label>Last Name</label>
                        <input id="lname" type="text" name="lname" class="textbox" onChange={this.lastNameChange.bind(this)}/>
                    </div><br/>
                    <div class="TextboxLableContainer2">
                        <label>Phone Number</label>
                        <input id="phoneNum" type="text" name="lname" class="textbox" onChange={this.phoneNumChange.bind(this)}/>
                    </div>
					<div class="TextboxLableContainer2">
                        <label>E-Mail</label>
                        <input id="email" type="text" name="lname" class="textbox" onChange={this.emailChange.bind(this)}/>
                    </div>
                    <button type="button" class="SubmitBtn" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </div>
            
        </section>
        
    </div>

    );
  }
}
