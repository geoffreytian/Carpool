import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Driver from "./Driver"
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import Home from "./Home";
import "./App.css";
import Passenger from "./Passenger";
=======
import Home from "./Home"
import Rider from "./rider"
>>>>>>> c6d04dff24ed915cdab05caf78f19f0e17addddb

class DriverButton extends Component{
    render(){
        return(
            <NavLink className="link" class="link" to="/Driver">Driver</NavLink>
            // <Button className="button" class="button" variant="contained" color="primary">
            //
            //   </Button>
        )
    }
}

class RiderButton extends Component{
  render(){
    return(
<<<<<<< HEAD
        <NavLink className="link" class="link" to="/Home">Home</NavLink>
        // <Button className="button" class="button" variant="contained" color="primary">
        //
        // </Button>
=======
        <Button className="button" variant="contained" color="primary">
            <NavLink to="/rider" >Rider</NavLink>
        </Button>
>>>>>>> c6d04dff24ed915cdab05caf78f19f0e17addddb
    )
  }
}

class PassengerButton extends Component{
    render(){
        return(
            <NavLink className="link" class="link" to="/Passenger">Passenger</NavLink>
            // <Button className="button" class="button" variant="contained" color="primary">
            // </Button>
        )
    }
}

 
class Main extends Component {

    renderDriver() {
        return (
            <DriverButton/>
        );
    }

    renderRider(){
      return(
          <RiderButton/>
      )
    }

    renderPassenger(){
        return(
            <PassengerButton/>
        )
    }

  render() {
    return (
      <HashRouter>
        <div>
<<<<<<< HEAD
            {this.renderHome()} {this.renderDriver()}  {this.renderPassenger()}

            <div className="content">
                <br></br>
                <p>
                <Route path="/Driver" component={Driver}/>
                <Route path="/Passenger" component={Passenger}/>
                    <Route path="/Home" component={Home}/>
=======
          <h1>Select:</h1>
          <p>{this.renderButton()}{this.renderButton()}{this.renderRider()}</p>
            <div className="content">
                <br></br>
                <p>
                <Route path="/driver" component={driver}/>
                <Route path="/rider" component={Rider}/>
>>>>>>> c6d04dff24ed915cdab05caf78f19f0e17addddb
                </p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;