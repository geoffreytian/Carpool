import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";

const ViewSelector = () => {
  return (
    <div className="center">
      <h1>I am...</h1>
      <Grid container>
        <Grid sm={6} item>
          <Button
            className="u-space-right"
            variant="contained"
            color="primary"
            component={Link}
            to="/new-driver"
          >
            A Driver
          </Button>
        </Grid>
        <Grid sm={6} item>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/new-rider"
          >
            A Passenger
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewSelector;
