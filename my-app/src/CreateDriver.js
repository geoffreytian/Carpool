import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDriver } from './actions';
import { TextField, List, ListItem, MenuItem, Input } from '@material-ui/core';

class CreateDriver extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    pickup: 'JB',
    destination: 'ACC',
    capacity: 0
  }

  pickups = [
    { value: 'JB', label: 'Jester Beach' },
    { value: '21St', label: '21st St' }
  ];
  destinations = [
    { value: 'ASCC', label: 'Austin Stone' },
    { value: 'ACC', label: 'ACC' }
  ]

  handleSubmit = e => {
    this.props.createDriver(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      pickup: 'JB',
      destination: 'ACC',
      capacity: 0
    });
    e.preventDefault();
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <List>
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

export default connect(null, {
  createDriver
})(CreateDriver);
