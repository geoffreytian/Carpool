import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./App.css";
import Home from "./Home"
import CreateDriver from "./CreateDriver"
import CreateRider from "./CreateRider"


class DriverButton extends Component{
    render(){
        return(
            <NavLink className="link" class="link" to="/drivers/new">Driver</NavLink>
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
            <NavLink className="link" class="link" to="/riders/new">Passenger</NavLink>
        )
    }
}

 
class Main extends Component {

    renderDriver() {
        return (
            <DriverButton/>
        );
    }

    renderHome() {
        return (
            <HomeButton/>
        )
    }

    renderPassenger() {
        return (
            <PassengerButton/>
        )
    }

    render() {
        return (
            <HashRouter>
                <div>
                    {this.renderHome()} {this.renderDriver()} {this.renderPassenger()}
                    <div className="content">
                        <br></br>
                        <Route path="/Home" component={Home}/>
                        <Route path="/drivers/new" component={CreateDriver}/>
                        <Route path="/riders/new" component={CreateRider}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}


 
export default Main;