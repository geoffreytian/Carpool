import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Driver from "./Driver"
import Button from '@material-ui/core/Button';
import "./App.css";
import Home from "./Home"
import Passenger from "./Passenger"


class DriverButton extends Component{
    render(){
        return(
            <NavLink className="link" class="link" to="/Driver">Driver</NavLink>
        )
    }
}

class HomeButton extends Component {
    render() {
        return (
            <NavLink className="link" class="link" to="/Home">Home</NavLink>
        )
    }
}

class PassengerButton extends Component{
    render(){
        return(
            <NavLink className="link" class="link" to="/Passenger">Passenger</NavLink>
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
                    <Route path="/Driver" component={Driver}/>
                    <Route path="/Passenger" component={Passenger}/>
                    <Route path="/Home" component={Home}/>
            </div>
        </div>
      </HashRouter>
    );
  }

  render(){
        return(
            <HashRouter>
                <div>
                    <Route path="/start" component={ViewSelector}/>
                    <Route path="/drivers/new" component={CreateDriver}/>
                </div>
            </HashRouter>
        )
  }
}

 
export default Main;