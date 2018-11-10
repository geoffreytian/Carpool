import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import driver from "./driver"
import Button from '@material-ui/core/Button';
import Home from "./Home"


class UserButton extends Component{
    render(){
        return(
              <Button className="button" variant="contained" color="primary">
                  <NavLink to="/driver">Driver</NavLink>
              </Button>
        )
    }
}

class HomeButton extends Component{
  render(){
    return(
        <Button className="button" variant="contained" color="primary">
            <NavLink to="/Home" onClick={ }>Home</NavLink>
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

    renderHome(){
      return(
          <HomeButton/>
      )
    }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Select:</h1>
          <p>{this.renderButton()}{this.renderButton()}{this.renderHome()}</p>
            <div className="content">
                <br></br>
                <p>
                <Route path="/driver" component={driver}/>
                <Route path="/" component={Home}/>
                </p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;