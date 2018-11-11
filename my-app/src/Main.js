import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import driver from "./driver"
import Button from '@material-ui/core/Button';
import Home from "./Home"
import Rider from "./rider"


class UserButton extends Component{
    render(){
        return(
              <Button className="button" variant="contained" color="primary">
                  <NavLink to="/driver">Driver</NavLink>
              </Button>
        )
    }
}

class RiderButton extends Component{
  render(){
    return(
        <Button className="button" variant="contained" color="primary">
            <NavLink to="/rider" >Rider</NavLink>
        </Button>
    )
  }
}

 
class Main extends Component {

    renderButton() {
        return (
            <UserButton/>
        );
    }

    renderRider(){
      return(
          <RiderButton/>
      )
    }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Select:</h1>
          <p>{this.renderButton()}{this.renderButton()}{this.renderRider()}</p>
            <div className="content">
                <br></br>
                <p>
                <Route path="/driver" component={driver}/>
                <Route path="/rider" component={Rider}/>
                </p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;