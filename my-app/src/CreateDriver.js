import React, { Component } from 'react';
import { , TextField, List, ListItem, MenuItem, Input } from '@material-ui/core';

class CreateDriver extends Component {
  state = {
    pickup: 'JB',
    destination: 'ACC'
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
          <ListItem><TextField label="First Name" /></ListItem>
          <ListItem><TextField label="Last Name" /></ListItem>
          <ListItem><TextField label="E-Mail" /></ListItem>
          <ListItem>
            <TextField
              className="TextField-select"
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
              className="TextField-select"
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
            <Input type="submit" value="Submit" />
          </ListItem>
        </List>
      </form>
    );
  }
}

export default CreateDriver;
