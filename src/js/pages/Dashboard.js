import React from "react";
import {Link} from "react-router";
import { connect } from "react-redux"
import {hashHistory} from "react-router"
import {fetchUser} from "../actions/userActions";


@connect((store) => {
  return {
    user: store.user,
    loggedIn: store.loggedIn
  };
})
export default class Dashboard extends React.Component{
    
    constructor(){
        super()
    }
    
    componentWillMount(){
        console.log(this.props)

    }
    
    
    render(){
        return(
            <h1>Hey</h1> 
        );
    }
}