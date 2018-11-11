import React, { Component } from 'react';
import { connect } from 'react-redux';
import { driverById } from './actions';
import { TextField, List, ListItem, MenuItem, Input } from '@material-ui/core';

class DriverDetail extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    pickup: this.props.pickup,
    destination: this.props.destination,
    capacity: this.props.capacity
  };

  pickups = [
    { value: 'JB', label: 'Jester Beach' },
    { value: '21St', label: '21st St' }
  ];
  destinations = [
    { value: 'ASCC', label: 'Austin Stone' },
    { value: 'ACC', label: 'ACC' }
  ];

  handleSubmit = e => {
    this.props.createDriver(this.state);
    e.preventDefault();
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  componentDidMount() {
    console.log('component on mount');
    return this.props.driverById(1);
  }

  componentDidUpdate(prevProps) {
    console.log('component did update');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <List>
          <ListItem>
            <h2>My Profile</h2>
          </ListItem>
          <ListItem>
            <TextField
              className="TextField"
              value={this.state.firstName}
              label="First Name"
              onChange={this.handleChange('firstName')}
            />
          </ListItem>
          <ListItem>
            <TextField
              className="TextField"
              value={this.state.lastName}
              label="Last Name"
              onChange={this.handleChange('lastName')}
            />
          </ListItem>
          <ListItem>
            <TextField
              className="TextField"
              value={this.state.email}
              label="E-Mail"
              onChange={this.handleChange('email')}
            />
          </ListItem>
          <ListItem>
            <TextField
              className="TextField"
              select
              value={this.state.destination}
              onChange={this.handleChange('destination')}
              label="Destination"
            >
              {this.destinations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              className="TextField"
              select
              value={this.state.pickup}
              onChange={this.handleChange('pickup')}
              label="Preferred Pickup Location"
            >
              {this.pickups.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              value={this.state.capacity}
              label="Car Capacity"
              onChange={this.handleChange('capacity')}
            />
          </ListItem>
          <ListItem>
            <Input type="submit" value="Submit" />
          </ListItem>
        </List>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.driver
  };
};

export default connect(mapStateToProps, {
  driverById
})(DriverDetail);
