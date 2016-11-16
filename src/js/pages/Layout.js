import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux"

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import {fetchUser} from "../actions/userActions";

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Layout extends React.Component {
    
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <Nav location={location} />
            {this.props.children}
        <Footer />

      </div>

    );
  }
}
