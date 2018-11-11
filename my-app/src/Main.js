import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Driver from "./Driver"
import Button from '@material-ui/core/Button';
import Home from "./Home";
import "./App.css";
import Passenger from "./Passenger";

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

class HomeButton extends Component{
  render(){
    return(
        <NavLink className="link" class="link" to="/Home">Home</NavLink>
        // <Button className="button" class="button" variant="contained" color="primary">
        //
        // </Button>
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

    renderHome(){
      return(
          <HomeButton/>
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
            {this.renderHome()} {this.renderDriver()}  {this.renderPassenger()}

            <div className="content">
                <br></br>
                <p>
                <Route path="/Driver" component={Driver}/>
                <Route path="/Passenger" component={Passenger}/>
                    <Route path="/Home" component={Home}/>
                </p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;