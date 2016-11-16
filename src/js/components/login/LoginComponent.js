import React from "react"
import {hashHistory} from "react-router";
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
export default class LoginComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            data: {
                username: "",
                hash: ""
            },
            error: ""
        }
    }
    
    usernameChange(e){
        this.state.data.username = e.target.value;
    }
    
    passwordChange(e){
        this.state.data.hash = e.target.value;
    }
    
    onSubmit(){
        this.props.dispatch(user_login(this.state.data));
    }
    
    render(){
        return(
            <div class="MainContent">
            <section class="SignUpSection">
                <h1 class="IntroHeading">Log In</h1>
                <div class="SignUpContainer">
                    <div class="SignUpContentContainer">
                    <h4 class="BillingH4">Account Info</h4>
                        <h5>{this.props.error}</h5>
                        <div class="TextboxLableContainer2">
                            <label>User Name</label>
                            <input id="username" type="text" name="lname" class="textbox" onChange={this.usernameChange.bind(this)}/>
                        </div>
                        <div class="TextboxLableContainer2">
                            <label>Password</label>
                            <input id="password" type="password" name="lname" class="textbox" onChange={this.passwordChange.bind(this)}/>
                        </div>

                        <button type="button" class="SubmitBtn" onClick={this.onSubmit.bind(this)}>Submit</button>
                    </div>
                </div>

            </section>
        </div>
        )
    }
}