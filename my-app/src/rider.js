import React, { Component } from "react";
import './rider.css';
import Formcontainer from "./Formcontainer";


class Rider extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Sample Form Container </h3>
        <Formcontainer />
      </div>
    );
  }

}
 
export default Rider;