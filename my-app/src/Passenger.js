import React, { Component } from "react";
import './App.css';
import Formcontainer from "./Formcontainer";

class Passenger extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h3> Passenger Form Container </h3>
                <Formcontainer />
            </div>
        );
    }

}
export default Passenger;