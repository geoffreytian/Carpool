import React, { Component } from "react";
import { HashRouter, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NavBar from './NavBar';
import ViewSelector from './ViewSelector';
import CreateDriver from './CreateDriver';
import DriverDetail from './DriverDetail';
import CreateRider from './CreateRider';

class Main extends Component {
  state = {
    view: 'default' // types: default, driver, rider
  };

  changeView = view => {
    this.setState({ view });
  };

  render() {
    return (
      <HashRouter basename="/">
        <Grid container spacing={24}>
          <Route path="/" component={NavBar} />
          <Grid item sm={12}>
            <Route path="/start" component={ViewSelector} />
            <Route path="/drivers/:id" component={DriverDetail} />
            <Route path="/new-driver" component={CreateDriver} />
            <Route path="/new-rider" component={CreateRider} />
          </Grid>
        </Grid>
      </HashRouter>
    );
  }
}


 
export default Main;